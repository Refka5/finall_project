const express = require("express");
const Book = require("../model/Book");
const {
  signup,
  login,
  verifyToken,
  getUser,
  refreshToken,
  logout,
} = require("../controllers/user-controller");
const booksController = require("../controllers/books-controller");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", verifyToken, getUser);
router.get("/refresh", refreshToken, verifyToken, getUser);
router.post("/logout", verifyToken, logout);

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);
module.exports = router;

module.exports = router;
