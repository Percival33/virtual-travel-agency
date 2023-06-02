const mongoose = require('mongoose');
const mockingoose = require('mockingoose');
const Review = require('../models/reviewModel');

describe('Review Model Test', () => {
  it('create & save review successfully', async () => {
    const validReview = new Review({
      review: 'This is a great tour!',
      rating: 5,
      tour: mongoose.Types.ObjectId(),
      user: mongoose.Types.ObjectId(),
    });

    mockingoose(Review).toReturn(validReview, 'save');

    const savedReview = await validReview.save();

    expect(savedReview._id).toBeDefined();
    expect(savedReview.createdAt).toBeDefined();
    expect(savedReview.review).toBe(validReview.review);
    expect(savedReview.rating).toBe(validReview.rating);
    expect(savedReview.tour).toEqual(validReview.tour);
    expect(savedReview.user).toEqual(validReview.user);
  });

  it('create review & check default value for createdAt', async () => {
    const validReview = new Review({
      review: 'This is a great tour!',
      rating: 5,
      tour: mongoose.Types.ObjectId(),
      user: mongoose.Types.ObjectId(),
    });

    mockingoose(Review).toReturn(validReview, 'save');

    const savedReview = await validReview.save();

    expect(savedReview.createdAt).toBeDefined();
    expect(savedReview.createdAt).toBeInstanceOf(Date);
  });
});
