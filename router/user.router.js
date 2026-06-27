const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getAllUsers,
  getUserbyId,
  updateUser,
  deleteUser,
} = require("../controller/user.controller.js");

router.post("/register", register);
router.post("/login", login);
router.get("/allusers", getAllUsers);
router.get("/:id", getUserbyId);
router.put("/update/:id", updateUser);
router.delete("/:id", deleteUser);
module.exports = router;
