const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get tour data from collection
  const tours = await Tour.find();

  // 2) Build template
  // 3) Render that template using tour data from 1)
  res.status(200).render('overview', {
    title: 'All tours',
    tours,
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  res
    .status(200)
    .set(
      'Content-Security-Policy',
      'worker-src blob: ;     child-src blob: ;      img-src data: blob: ; connect-src https://*.tiles.mapbox.com https://api.mapbox.com https://events.mapbox.com ;'
    )
    .render('tour', {
      title: `${tour.name} tour`,
      tour,
    });
});
