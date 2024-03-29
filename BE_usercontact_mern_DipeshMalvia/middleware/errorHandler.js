const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.status(constants.VALIDATION_ERROR).json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      return;
    case constants.NOT_FOUND:
      res.status(constants.NOT_FOUND).json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      return;
    case constants.UNAUTHORIZED:
      res.status(constants.UNAUTHORIZED).json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
      return;
    case constants.FORBIDDEN:
      res.status(constants.FORBIDDEN).json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      return;
    case constants.SERVER_ERROR:
      res.status(constants.SERVER_ERROR).json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
      return;
    default:
      console.log("No Error, All good !");
      return;
  }
};

module.exports = errorHandler;
