import addCustomer from './methods/addCustomer';
import authCustomer from './methods/authCustomer';
import getCustomers from './methods/getCustomers';
import getHistory from './methods/getHistory';
import registerCustomer from './methods/registerCustomer';

export const customerApiManager = {
  authCustomer,
  registerCustomer,
  getHistory,
  addCustomer,
  getCustomers,
};
