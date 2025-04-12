import authCustomer from "./methods/authCustomer";
import getHistory from "./methods/getHistory";
import registerCustomer from "./methods/registerCustomer";

export const customerApiManager = {
  authCustomer,
  registerCustomer,
  getHistory
};