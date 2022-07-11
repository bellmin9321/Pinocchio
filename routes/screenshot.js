const express = require("express");
const screenshotRouter = express.Router();
const { getScreenshotList } = require("./controllers/screenshot");

screenshotRouter.get("/", getScreenshotList);

module.exports = screenshotRouter;
