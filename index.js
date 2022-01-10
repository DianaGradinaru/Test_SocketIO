const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(
        "/home/dee/Desktop/projects/learning/socketIO/chat-example/index.html"
    );
});

io.on("connection", (socket) => {
    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });
});

server.listen(3100, () => {
    console.log("listening on *:3100");
});
