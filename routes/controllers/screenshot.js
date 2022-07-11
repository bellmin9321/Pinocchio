const screenshotService = require("../../services/screenshotService");

exports.getScreenshotList = async (req, res, next) => {
  try {
    const screenshotList = await screenshotService.findScreenshotList();

    return res.status(200).json({
      result: "ok",
      screenshotList,
    });
  } catch (error) {
    return res.status(500).json({
      result: "ng",
      errorMessage: "cannot get all screenshotList. try again.",
    });
  }
};
