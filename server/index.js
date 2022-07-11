const http = require("http");
const port = process.env.PORT;

const connectServer = (app) => {
  const server = http.createServer(app);

  server.listen(8000, () => {
    console.log("8000번 포트 연결중..");
  });
};

module.exports = connectServer;
