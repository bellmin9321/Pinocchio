require("dotenv").config();
const express = require("express");
const path = require("path");
const http = require("http");
const port = process.env.PORT;
const logger = require("morgan");
const cors = require("cors");

const errorHandler = require("./error");
const connectServer = require("./server");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  }),
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

errorHandler(app);
connectServer(app);

module.exports = app;
