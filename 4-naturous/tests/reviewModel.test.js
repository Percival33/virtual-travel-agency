const mongoose = require('mongoose');
const mockingoose = require('mockingoose');
const Review = require('../models/reviewModel');
const Tour = require('../models/tourModel');

beforeEach(() => {
  mockingoose.resetAll();
});

describe('Review Model Test', () => {
  it('create & save review successfully', async () => {
    const validReview = new Review({
      review: 'This is a great tour!',
      rating: 5,
      tour: '60ff45e5f59055081cfdc123',
      user: '60ff45e5f59055081cfdc124',
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

describe('Add Reviews and check average rating', () => {
  it('should update the average rating of the tour', async () => {
    mockingoose(Tour).toReturn(
      {
        _id: '60ff45e5f59055081cfdc123',
        name: 'Test Tour',
        ratingsAverage: 0,
      },
      'findOne'
    );

    mockingoose(Review).toReturn(
      [
        {
          _id: '60ff45e5f59055081cfdc111',
          tourId: '60ff45e5f59055081cfdc123',
          rating: 4,
        },
        {
          _id: '60ff45e5f59055081cfdc222',
          tourId: '60ff45e5f59055081cfdc123',
          rating: 5,
        },
      ],
      'find'
    );
    mockingoose(Review).toReturn(Review, 'save');

    const tour = await Tour.findOne({ _id: '60ff45e5f59055081cfdc123' });

    const reviews = await Review.find({ tourId: '60ff45e5f59055081cfdc123' });

    let sumRating = 0;
    reviews.forEach((review) => {
      sumRating += review.rating;
    });

    const ratingsAverage = sumRating / reviews.length;

    tour.ratingsAverage = ratingsAverage;

    expect(tour.ratingsAverage).toBe(4.5);
  });
});
