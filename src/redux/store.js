import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";

import loginReducer from "./reducers/loginReducer";


const rootReducer=combineReducers({
    loginState:loginReducer
})

const store=createStore(rootReducer,applyMiddleware(thunk))

export default store