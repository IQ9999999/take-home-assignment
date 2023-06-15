import request from "supertest";
import app from "../index.js";

describe("User Routes", () => {
  let login_token = null;

  // Test case for user registration
  describe("POST /user/register", () => {
    it("should register a new user", async () => {
      const response = await request(app).post("/user/register").send({
        username: "testuser",
        password: "testpassword",
      });

      expect(response.statusCode).toBe(201);
      expect(response.body.message).toBe("User registered successfully!");
    });
  });

  // Test case for user login
  describe("POST /user/login", () => {
    it("should authenticate a user and return a token", async () => {
      const response = await request(app).post("/user/login").send({
        username: "testuser",
        password: "testpassword",
      });

      expect(response.statusCode).toBe(200);
      expect(response.body.auth).toBe(true);
      expect(response.body.token).toBeTruthy();

      login_token = response.body.token;
    });
  });

  // Test case for accessing the user profile
  describe("GET /user/profile", () => {
    it("should return the user profile", async () => {
      const response = await request(app).get("/user/profile").set("Authorization", `Bearer ${login_token}`);
      expect(response.statusCode).toBe(200);
    });
  });
});
