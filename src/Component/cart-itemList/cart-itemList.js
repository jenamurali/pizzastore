import React from "react";
import {useSelector} from "react-redux"
import "./cart-itemList.css"
import { CartItem } from "../cart-item/cart-item";

export const CartItemList = (props) => {
    const cartItems = useSelector(state => state.cartReducer.cartItems);
    const getTotalAmount = () => {
        return cartItems.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity),0)
    }
    return (
        <div className="cartitemlist">
            <section>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mb-3">
                            <div className="pt-4 wish-list">
                                <h5 className="mb-4">Cart (<span>{cartItems.length}</span> items)</h5>
                                {cartItems.map((itm,idx) => 
                                    <CartItem key={idx} {...itm}/>
                                )}
                                <h5 style={{float:"right"}}>Total : {getTotalAmount() + "/-"}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}