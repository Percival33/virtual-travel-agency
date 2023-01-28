const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

// const { getAllTours, createTour, getTour, etc} = require('./../controllers/tourController');
const router = express.Router({ mergeParams: true });

// POST /tour/ad1233/reviews
// GET /tour/ad1233/reviews

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview
  );
router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(authController.protect, reviewController.updateReview)
  .delete(authController.protect, reviewController.deleteReview);

module.exports = router;
