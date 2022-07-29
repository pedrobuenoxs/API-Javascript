class LoginRouter {
  route(httpRequest) {
    if (!httpRequest.body.email) {
      return {
        statusCode: 300,
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
});
