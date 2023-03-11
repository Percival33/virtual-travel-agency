/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51MiGbcEwYauv13Cp2EoYxrkdrJdUm1D5eComB8YfK3vjuEeQhhbJuolhBGM3xBcmGQESD40GI9iWhL6Q0FBYAwwF0049O6QUeK'
  );
  try {
    // 1) get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // console.log(session);
    // 2) Create checkout form + charge credit card

    window.location.replace(session.data.session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
