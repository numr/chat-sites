

const axios = require('axios')
const execa = require('execa')
const imglist = require('./imglist');
const appName = "peoplefinderfree Web"

const hookUrl = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=7aad05fc-5120-48e4-95b5-7149312aa5f6"

function getGitHash() {
  const res = execa.commandSync('git rev-parse --short HEAD');
  return res.stdout;
}

function getGitBranch() {
  const res = execa.commandSync('git rev-parse --abbrev-ref HEAD');
  return res.stdout;
}

function getGitUserName() {
  const res = execa.commandSync('git config user.name');
  return res.stdout;
}

function getGitCommit() {
  const res = execa.commandSync('git log  --pretty="%s" -5')
  let arr = res.stdout.replace(/"/g,'').split('\n')
  const commit = arr.filter(it => !it.includes('Merge branch') && !it.includes('Merge Request') && !it.includes('Merge pull request'))
  return commit[0]
}

function getContent() {
  return `项目：<font color=\"info\"> ${appName} </font>
    环境：<font> ${process.env.REACT_APP_SECRET_BUILD_TYPE} </font>
    分支：<font color=\"comment\"> ${getGitBranch()} ${getGitHash()} </font>
    操作人：<font color=\"comment\"> ${getGitUserName()} </font>
    部署成功 [查看地址](${process.env.REACT_APP_CONFIG_MAINURL})`
}

const sendWechatHook = function () {

  return axios.post(hookUrl, {
    "msgtype": "markdown",
    "markdown": {
      "content": getContent()
    }
  })
}

//[0,max)的数
const randomNum = (max) => {
  return Math.floor(Math.random() * max);
}
//随机图片
const getRandomImg = () => {
  const pageSize = randomNum(3500);
  return imglist[pageSize];
}

const sendWechatImgHook = async () => {
  const isProd = process.env.REACT_APP_SECRET_BUILD_TYPE === 'production'
  let imgurl = getRandomImg();

  console.log('img', imgurl);
  
  return axios.post(hookUrl, {
    "msgtype": "news",
    "news": {
      "articles": [
        {
          "title": `${getGitUserName()} 发布 ${appName} ${isProd ? '正式' : '测试'}`,
          "description": `分支 : ${getGitBranch()} \n\n${getGitCommit()}`,
          "url": process.env.REACT_APP_CONFIG_MAINURL,
          "picurl": imgurl
        }
      ]
    },
  })
}

module.exports = {
  sendWechatHook,
  sendWechatImgHook
}

