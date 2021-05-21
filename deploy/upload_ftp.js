#!/usr/bin/env node
var FtpDeploy = require("ftp-deploy");

var path = require("path");
var ftpDeploy = new FtpDeploy();

const childProcess = require("child_process");

const { sendUnzipHook } = require("./hooks");


const { program } = require('commander');
const { exit } = require("process");
const { sendWechatHook, sendWechatImgHook } = require("./wechat_work");


program
  .option('-c, --deploy_mode <type>', 'choose deploy mode', 'test');

program.parse(process.argv);

console.log(`deploy mode: ${program.deploy_mode}`);

const deploy_mode = program.deploy_mode;


const config = {
  sure: process.env.DEPLOY_FTP_SURE == 1, // 是否需要命令行确认
  host: process.env.DEPLOY_FTP_HOST,
  port: process.env.DEPLOY_FTP_PORT,
  user: process.env.DEPLOY_FTP_USER,
  domain: process.env.DEPLOY_FTP_DOMAIN,
  password: process.env.DEPLOY_FTP_PASSWORD,
};

const buildFilePath = path.join(__dirname, "../public");
const ftpRemotePath = "/";

// 用户确认
// const userSure = () => {
//   if (!config.sure) {
//     return Promise.resolve();
//   }
//   return new Promise(re => {
//     process.stdout.write(`deploy [${deploy_mode}], are you sure? (y/n) `);
//     process.stdin.resume();
//     process.stdin.setEncoding('utf-8');
//     process.stdin.on('data', (chunk) => {
//       chunk = chunk.replace(/[\s\n]/g, '');
//       chunk = chunk.toUpperCase();
//       if (chunk === "Y") {
//         process.stdin.pause();
//         re();
//       } else if (chunk === "N") {
//         process.exit();
//       } else {
//         console.log("pleae input (y/n)");
//       }
//     });
//   })
// }

// 用户确认
const userSure = () => {
  if (!config.sure) {
    return Promise.resolve();
  }
  return new Promise(re => {
    re();
  })
}



// 压缩文件
const zipFiles = () => {
  const filePath = "dist.tar.gz"
  return new Promise(re => {
    childProcess.exec(`tar -czf ${filePath} *`, {
      cwd: path.resolve("./public")
    }, err => {
      if (err) { throw err }
      re();
    });
  });
}

// 上传文件
const upload = () => {
  const filePath = "dist.tar.gz"
  return ftpDeploy
    .deploy({
      user: config.user,
      password: config.password,
      host: config.host,
      port: config.port,
      localRoot: buildFilePath,
      remoteRoot: ftpRemotePath,
      // include: ["*", "**/*"],      // this would upload everything except dot files
      // 改用压缩后，上传单个文件
      include: [filePath],
      // exclude: ["electron/**"],
      // delete ALL existing files at destination before uploading, if true
      deleteRemote: false,
      // Passive mode is forced (EPSV command is not sent)
      forcePasv: true
    })
}

// 触发钩子 解压文件
const unZip = () => {
  // const filePath = "dist.tar.gz"
  const param = `${config.domain}`
  return sendUnzipHook(param)
}



ftpDeploy.on("uploaded", function (data) {
  console.log("UPLOADED:", data); // same data as uploading event
});

ftpDeploy.on("upload-error", function (data) {
  console.error("upload-error", data); // data will also include filename, relativePath, and other goodies
});

ftpDeploy.on("error", function (data) {
  console.error("error", data); // data will also include filename, relativePath, and other goodies
});

ftpDeploy.on("log", function (data) {
  console.log("[log]", data); // data will also include filename, relativePath, and other goodies
});






userSure()
  .then(zipFiles)
  .then(upload)
  .then(unZip)
  .then(sendWechatImgHook)
  // .then(sendWechatHook)
  .then((...arg) => {
    console.log("successfully")
  })
  .catch(err => {
    console.error(err)
    exit(0)
  })
