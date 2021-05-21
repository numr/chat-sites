const inquirer = require('inquirer'); //命令行交互
const shell = require('shelljs'); // 执行shell命令
const execa = require('execa');// 执行shell命令
const chalk = require('chalk'); //命令行颜色
const fs = require('fs');
const path = require("path");

// 需要的依赖 inquirer shelljs chalk
// 本文 用到的 GIT_URL (git项目地址)， NEED_YARN_API (适合后台需要api) 在 .env.production 配置


//用来部署的目录
const buildDir = 'deploy_build_only';

//logs 打印信息
const defaultLog = log => console.log(chalk.blue(log))
const errorLog = log => console.log(chalk.red(log))
const successLog = log => console.log(chalk.green(log))

//处理错误
const handleError = (code, err = '失败, 流程中断!') => {
    if (code !== 0) {
        errorLog(err)
        process.exit() //退出流程
    }
}

/**
 全局共享信息
*/
let CONFIG = {
    tagName: '',
    tagDes: ''
}
/**
 * 删除本地tags
 */
const deleteLocalTags = async () => {
    const command = `git tag -l | xargs git tag -d`;
    defaultLog(`删除本地tags: ${command}`);
    const { code } = await shell.exec(command);
    handleError(code, '删除本地tags失败, 流程中断!');
}

/**
 *拉取远程所有tag 
 */
const getTagsFromOrigin = async () => {
    const command = `git fetch -p origin`;
    defaultLog(`拉取远程: ${command}`);
    const { code } = await shell.exec(command);
    handleError(code, '拉取远程信息失败, 流程中断!');
}

/** 
 *显示所有tag 
 */
const showAllTags = async () => {
    successLog('最近几个 tag 列表:');
    successLog(getTagsList().join('\n'));
    successLog(`\n版本命名规则(请遵守): a.b.c  a: 版本大更新 b: 增加小功能 c: 修复bug`)
}

/**
 * 获取tags list  (num: 最近的num个tag标签)
 * @param {number} num (默认5)
 * @param {boolean} reverse (可选,默认false)是否反转数组 
 * @returns string[]
 */
const getTagsList = (num = 5, reverse = false) => {
    const { exitCode, stdout } = execa.commandSync('git tag -ln');
    handleError(exitCode, '显示tag失败, 流程中断!');
    const list = stdout.split('\n');
    return reverse ? list.slice(-num).reverse() : list.slice(-num);
}

/** 
 *创建新的tag 
 */
const createNewTag = async () => {
    //tag 版本号
    const { tagName } = await inquirer
        .prompt([{
            type: 'input',
            message: '新的tag 版本号(如 1.1.0):',
            name: 'tagName'
        }]);

    //tag 描述
    const { tagDes } = await inquirer
        .prompt([{
            type: 'input',
            message: '标签描述:',
            name: 'tagDes'
        }]);
    //保存tag 全局信息
    CONFIG = { tagName, tagDes }
    const command = `git tag -a ${CONFIG.tagName} -m '${CONFIG.tagDes}' `;
    defaultLog(`创建新的tag: ${command}`)
    const { code } = await shell.exec(command);
    handleError(code, '创建tag失败, 流程中断!');
    successLog(`创建tag ${tagName} 成功!`);
}

/**
 * 推送所有tags到远程
 */
const pushTagsToOrigin = async () => {
    const command = `git push origin --tags`;
    defaultLog(`推送tags到远程: ${command}`);
    const { code } = await shell.exec(command);
    handleError(code, '推送tags到远程失败, 流程中断!');
}


/**
 * 选择tag 回滚版本
 */
const selectTagToDeploy = async () => {
    const { tagInfo } = await inquirer
        .prompt([{
            type: 'list',
            message: '请选择标签回滚版本:',
            name: 'tagInfo',
            choices: getTagsList(5,true)
        }]);
    const command = `git checkout ${tagInfo.split(` `)[0]}`;
    defaultLog(`切换到选择的tag: ${command}`);
    const { code } = await shell.exec(command);
    handleError(code, '切换到选择的tag失败, 流程中断!');
}

/**
 * 执行 deploy 部署命令 正式: pro , 测试: test .  该流程适合发布正式
 * @param {string} type 
 */
const deploy = async (type = 'test') => {
    successLog(`\n当前分支`);
    await shell.exec(`git branch`);

    const command = `npm run deploy:${type}`;
    defaultLog(`执行 deploy 部署命令: ${command}`);
    const { code } = await shell.exec(command);
    // 部署成功与否都回到master分支
    await shell.exec('git checkout master');
    handleError(code, '打包部署失败, 流程中断!');
    successLog(`大吉大利, 部署成功!`);
}

/**
 * 读取路径信息
 * @param {string} path 路径
 */
function getStat(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if (err) {
                resolve(false);
            } else {
                resolve(stats);
            }
        })
    })
}

/**
  * 创建路径
  * @param {string} dir 路径
  */
function mkdir(dir) {
    return new Promise((resolve, reject) => {
        fs.mkdir(dir, err => {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }
        })
    })
}

/**
  * 路径是否存在，不存在则创建
  * @param {string} dir 路径
  */
const dirExists = async (dir) => {
    const isExists = await getStat(dir);
    //如果该路径且不是文件，返回true
    if (isExists && isExists.isDirectory()) {
        return true;
    } else if (isExists) {
        //如果该路径存在但是文件，返回false
        return false;
    }
    //如果该路径不存在，拿到上级路径
    const tempDir = path.parse(dir).dir;
    //递归判断，如果上级目录也不存在，则会代码会在此处继续循环执行，直到目录存在
    const status = await dirExists(tempDir);
    let mkdirStatus;
    if (status) {
        mkdirStatus = await mkdir(dir);
    }
    return mkdirStatus;
}

/**
 * 拉取远程git
 */
const pulloriginMaster = async () => {
    const command = `git clone ${process.env.GIT_URL}`;
    defaultLog(`拉取远程git仓库: ${command}`);
    const { code } = await shell.exec(command);
    handleError(code, `git拉取失败, 请检查是否有权限!`);
}

/**
 * 检查是否拉取git 没有则拉取, 有则进入目录
 */
const checkGitExists = async () => {
    const readDir = fs.readdirSync("./");
    if (readDir.length) {
        const { code } = await shell.cd(readDir[0]);
        handleError(code, `请确保${buildDir}目录下只有git拉取目录`);
        await shell.exec(`pwd`);
        // 可能之前发布过, 所以拉取最新的master信息
        const pullRes = await shell.exec(`git pull`);
        handleError(pullRes.code, `git pull 失败.`);
        //安装依赖
        const yarnRes = await shell.exec(`yarn`);
        handleError(yarnRes.code, `yarn安装依赖失败,请检查是否安装yarn或者网络问题.`);
        // 是否需要yarn api  在 .env.production 配置
        if (process.env.NEED_YARN_API == 1) {
            const apiRes = await shell.exec(`yarn api`);
            handleError(apiRes.code, `yarn api失败,请检查是否安装yarn或者网络问题.`);
        }
    } else {
        //没有git目录则拉取
        await pulloriginMaster();
        await checkGitExists(); // 再次检查
    }
}

/**
 * 检查发布环境 检查发布目录, 没有则创建
 */
const checkDeployCondition = async () => {
    const flag = await dirExists(`./${buildDir}`)
    if (!flag) { return handleError(-1, `${buildDir}只能是目录不能是文件`) }
    await shell.cd(buildDir);
    await checkGitExists();
}

/**
 * 需要创建新tag , 发布新版本
 */
const createNewVersion = async () => {
    //删除本地tags
    await deleteLocalTags();
    //拉取同步远程所有信息, tags
    await getTagsFromOrigin();
    //显示所有tag
    await showAllTags();
    //创建新的tag
    await createNewTag();
    //执行 deploy 部署命令
    await deploy('pro');
    //发布成功后推送tags到远程
    await pushTagsToOrigin();
}

/**
 * 回滚版本
 */
const rollbackVersion = async () => {
    //删除本地tags
    await deleteLocalTags();
    //拉取同步远程所有信息, tags
    await getTagsFromOrigin();
    //选择tag去发布
    await selectTagToDeploy();
    //执行 deploy 部署命令
    await deploy('pro');
}

/**
 * 选择流程发布
 */
const selectProcess = () => {
    inquirer
        .prompt([{
            type: 'list',
            message: '请选择流程',
            name: 'flag',
            choices: [{
                name: '发新版本',
                value: true
            }, {
                name: '回滚版本',
                value: false
            }]
        }])
        .then(answers => {
            const { flag } = answers;
            if (flag) {
                //新版本
                createNewVersion();
            } else {
                //回滚
                rollbackVersion();
            }
        })
}

const app = async () => {
    // 检查发布目录和git, 没有则创建和拉取, 
    await checkDeployCondition();
    await selectProcess();
}

app();