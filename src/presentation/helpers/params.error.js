module.exports = class MissingParamsError extends Error {
  constructor(param) {
    super(`"Missing params: ${param}"`);
    this.name = "MissingParamsError";
  }
};
