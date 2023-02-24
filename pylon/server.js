const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const webSocketServer = require("websocket").server;
const http = require("http");
var WebSocketClient = require("websocket").client;
var client = new WebSocketClient();

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

client.on("connectFailed", function (error) {
  console.log("Connect Error: " + error.toString());
});

client.on("connect", function (connection) {
  console.log("WebSocket Client Connected");
  connection.on("error", function (error) {
    console.log("Connection Error: " + error.toString());
  });
  connection.on("close", function () {
    console.log("echo-protocol Connection Closed");
  });
  connection.on("message", function (message) {
    if (message.type === "utf8") {
      var latency = new Date().getTime() - message.utf8Data;
      //console.log(latency + "ms");
      app.get("/message", (req, res) => {
        res.json({ message: latency });
      });
    }
  });
});

client.connect("ws://localhost:55455/");

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
