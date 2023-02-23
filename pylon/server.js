const webSocketServer = require("websocket").server;
const http = require("http");

const server = http.createServer();
server.listen(55455);
const wsServer = new webSocketServer({ httpServer: server });

wsServer.on("request", function (request) {
  console.log("establishing a new connection with client");
  var connection = request.accept(null, request.origin);
  setInterval(() => {
    connection.sendUTF(new Date().getTime());
  }, 100);
});

http.get({ host: "api.ipify.org", port: 80, path: "/" }, function (resp) {
  resp.on("data", function (ip4) {
    console.log("My IPv4 address is: " + ip4);
  });
});

http.get({ host: "api64.ipify.org", port: 80, path: "/" }, function (resp) {
  resp.on("data", function (ip6) {
    console.log("My IPv6 address is: " + ip6);
  });
});
