const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

// const { getAllTours, createTour, getTour, etc} = require('./../controllers/tourController');
const router = express.Router({ mergeParams: true });

// POST /tour/ad1233/reviews
// GET /tour/ad1233/reviews

router.use(authController.protect);

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.restrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview
  );
router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(
    authController.restrictTo('user', 'admin'),
    reviewController.updateReview
  )
  .delete(
    authController.restrictTo('user', 'admin'),
    reviewController.deleteReview
  );

module.exports = router;
