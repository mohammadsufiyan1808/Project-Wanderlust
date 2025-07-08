const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const{isLoggedIn, isOwner, validateListing}=require("../middleware.js");
const listingsController=require("../controllers/listings.js");
const multer  = require('multer');
const {storage}= require("../cloudConfig.js");
const upload = multer({ storage });


//index and create Routes
router.route("/")
  .get(wrapAsync(listingsController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingsController.createListing)
  );

//New Route
router.get("/new", isLoggedIn, listingsController.renderNewForm);


//Show,Update and Delete Routes
router.route("/:id")
  .get(wrapAsync(listingsController.showListing))
  .put(
    isLoggedIn,
    upload.single("listing[image]"),
    isOwner,
    validateListing,
    wrapAsync(listingsController.updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingsController.destroyListing));


//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingsController.renderEditForm));

module.exports = router;
