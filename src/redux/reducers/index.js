import basketReducer from './basketReducer';
import checkoutReducer from './checkoutReducer';
import filterReducer from './filterReducer';
import miscReducer from './miscReducer';
import productReducer from './productReducer';

const rootReducer = {
  products: productReducer,
  basket: basketReducer,
  filter: filterReducer,
  checkout: checkoutReducer,
  app: miscReducer
};

export default rootReducer;
