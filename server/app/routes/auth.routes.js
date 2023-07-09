module.exports = (app) => {
  const user = require("../controllers/auth.controller");
  const router = require("express").Router();

  router.get("/", user.getUser);
  router.post("/register", user.registerUser);
  router.post("/login", user.loginUser);

  app.use("/api/auth", router);
};
