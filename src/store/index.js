import { createStore ,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginreducer } from "../reducers/user";
export const store = createStore(loginreducer,applyMiddleware(thunk))