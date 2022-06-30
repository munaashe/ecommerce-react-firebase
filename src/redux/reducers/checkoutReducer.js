import {
  RESET_CHECKOUT
} from 'constants/constants';

const defaultState = {
  shipping: {},
  payment: {
    type: 'paypal',
    name: '',
    cardnumber: '',
    expiry: '',
    ccv: ''
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case RESET_CHECKOUT:
      return defaultState;
    default:
      return state;
  }
};
