class LoginRouter {
  route(httpRequest) {
    if (!httpRequest) {
      return {
        statusCode: 500,
      };
    }
    const { email, password } = httpRequest.body;
    if (!email || !password) {
      return {
        statusCode: 400,
      };
    }
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
  });

  test("Should return 500 if no httpRequest is provided  ", () => {
    const router = new LoginRouter();
    const httpResponse = router.route();
    expect(httpResponse.statusCode).toBe(500);
  });
});
