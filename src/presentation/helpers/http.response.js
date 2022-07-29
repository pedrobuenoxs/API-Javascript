const MissingParamsError = require("./params.error");

module.exports = class HttpResponse {
  static badRequest(paramName) {
    return {
      statusCode: 400,
      body: new MissingParamsError(paramName),
    };
  }
  static ok() {
    return {
      statusCode: 200,
    };
  }
  static serverError() {
    return {
      statusCode: 500,
    };
  }
};
