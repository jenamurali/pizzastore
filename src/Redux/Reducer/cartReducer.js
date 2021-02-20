import {Action} from "../Action/ActionType";

const defaultValue = {
    cartItems: [],
}

function cartReducer (state = defaultValue, action) {
    debugger
    switch (action.type) {
        case Action.ADDTO_CART : 
            return {
                ...state
            }
        default:
            return {...state}       
    }
}

export default cartReducer;