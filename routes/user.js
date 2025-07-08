const express = require("express");
const router = express.Router();
const User=require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const{saveRedirectUrl}=require("../middleware.js");

const userController=require("../controllers/users.js");

//rendering and uploading user signup data
router.route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signup));


//rendering and uploading user login data
router.route("/login")
    .get(userController.renderLoginForm)
    .post(saveRedirectUrl, passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash:true,
        }), 
        userController.login
    );


router.get("/logout", userController.logout);

module.exports=router;