const http = require("http");
const port = process.env.PORT;

const connectServer = (app) => {
  const server = http.createServer(app);

  server.listen(port, () => {
    console.log(`${port}번 포트 연결중..`);
  });
};

module.exports = connectServer;
