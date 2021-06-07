const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  getUserGallery,
  addGallery,
  deleteGallery
} = require("./gallery.controller");
router.post("/", checkToken, getUserGallery);
router.post("/add-gallery", checkToken, addGallery);
router.delete("/", checkToken, deleteGallery);

module.exports = router;
