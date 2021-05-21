const http = require("http")

const hooksBaseUrl = process.env.HOOK_URL;
const access_key = process.env.HOOK_ACCESS_KEY;

const genUrl = (param) => {
  return `${hooksBaseUrl}?access_key=${access_key}&param=${param}`
}

const sendUnzipHook = function (filePath) {
  const url = genUrl(filePath);
  return new Promise(re => {
    http.get(url, (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];

      let error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
          `Status Code: ${statusCode}`);
      }
      if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          re(parsedData);
        } catch (e) {
          console.error(e.message);
          throw e;
        }
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
      throw e;
    });
  })
}

module.exports = {
  sendUnzipHook,
}