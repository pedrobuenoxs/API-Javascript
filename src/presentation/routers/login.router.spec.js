class LoginRouter {
  route(httpRequest) {
    if (!httpRequest) return HttpResponse.serverError();
    if (!httpRequest.body) return HttpResponse.serverError();
    const { email, password } = httpRequest.body;
    if (!email) return HttpResponse.badRequest("email");
    if (!password) return HttpResponse.badRequest("password");
  }
}

class MissingParamsError extends Error {
  constructor(param) {
    super(`"Missing params: ${param}"`);
    this.name = "MissingParamsError";
  }
}

class HttpResponse {
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
}

describe("Login Router", () => {
  test("Should return 400 if no email is provided  ", () => {
    const router = new LoginRouter();
    const httpRequest = {
      body: {
        password: "123456",
      },
    };
    const httpResponse = router.route(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body.name).toBe("MissingParamsError");
    expect(httpResponse.body).toEqual(new MissingParamsError("email"));
  });
  test("Should return 400 if no password is provided  ", () => {
    const router = new LoginRouter();
    const httpRequest = {
      body: {
        email: "  @gmail.com",
      },
    };
    const httpResponse = router.route(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body.name).toBe("MissingParamsError");
    expect(httpResponse.body).toEqual(new MissingParamsError("password"));
  });

  test("Should return 500 if no httpRequest is provided  ", () => {
    const router = new LoginRouter();
    const httpResponse = router.route();
    expect(httpResponse.statusCode).toBe(500);
  });

  test("Should return 500 if httpRequest is null  ", () => {
    const router = new LoginRouter();
    const httpRequest = {};
    const httpResponse = router.route(httpRequest);
    expect(httpResponse.statusCode).toBe(500);
  });
});
