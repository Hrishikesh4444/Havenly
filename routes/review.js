const express=require("express");
const router =express.Router({mergeParams: true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError =require("../utils/expressError.js");
const Listing=require("../models/listing.js");
const Review=require("../models/reviews.js");
const {validateReview, isLoggedIn, isReviewAuthor}=require("../middleware.js");

const reviewController=require("../controllers/reviews.js");
const review=require("../models/reviews.js");


//Post Route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//Delete Review Route
router.delete(
    "/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview)
);

module.exports=router;