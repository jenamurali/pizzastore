import { combineReducers } from "redux";

import pizzaReducer from "./Reducer/reducer";
import cartReducer from "./Reducer/cartReducer";

const rootReducer = combineReducers({
    pizzaReducer,
    cartReducer
});

export default rootReducer;