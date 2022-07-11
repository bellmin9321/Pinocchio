const Screenshot = require("../models/screenshot");

exports.findScreenshotList = async () => {
  return await Screenshot.find();
};
