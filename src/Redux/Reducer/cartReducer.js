import {Action} from "../Action/ActionType";
import { addItemToCart, removeItemFromCart } from "../../utils/utils";

const defaultValue = {
    cartItems: [],
}

function cartReducer (state = defaultValue, action) {
    debugger
    switch (action.type) {
        case Action.ADDTO_CART : 
            return {
                ...state,
                cartItems : addItemToCart(state.cartItems,action.item)
            }
        case Action.REMOVE_CART :
            return{
                ...state,
                cartItems : removeItemFromCart(state.cartItems,action.item)
            }
        case Action.REMOVE_ALL : 
            return{
                ...state,
                cartItems : state.cartItems.filter(dat => dat.id !== action.itemID)
            }
        default:
            return {...state}       
    }
}

export default cartReducer;