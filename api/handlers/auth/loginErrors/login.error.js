class LoginError extends Error {
  constructor(message){
      super();
      this.name = '[LoginError]'
      this.message = message;
      this.statusCode = 400;
  }
}

module.exports = {
  LoginError,
}