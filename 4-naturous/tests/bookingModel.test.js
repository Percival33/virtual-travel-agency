const mockingoose = require('mockingoose');
const Booking = require('../models/bookingModel');

beforeEach(() => {
  mockingoose.resetAll();
});

describe('Booking Model Test', () => {
  it('create & save booking successfully', async () => {
    const validBooking = new Booking({
      tour: '60ff45e5f59055081cfdc123',
      user: '60ff45e5f59055081cfdc124',
      price: 200,
      paid: true,
    });

    mockingoose(Booking).toReturn(validBooking, 'save');

    try {
      const savedBooking = await validBooking.save();

      expect(savedBooking._id).toBeDefined();
      expect(savedBooking.tour).toBe(validBooking.tour);
      expect(savedBooking.user).toBe(validBooking.user);
      expect(savedBooking.price).toBe(validBooking.price);
      expect(savedBooking.paid).toBe(validBooking.paid);
      expect(savedBooking.createdAt).toBeDefined();
    } catch (error) {
      console.error(error);
      expect(true).toBe(false);
    }
  });
});
