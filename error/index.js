const createError = require("http-errors");

const errorHandler = (app) => {
  app.use((req, res, next) => {
    next(createError(404));
  });

  app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    return res.status(err.status).json({ message: err.message });
  });
};

module.exports = errorHandler;
