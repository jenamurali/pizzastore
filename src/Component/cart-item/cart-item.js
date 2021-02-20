import React from "react";
import {useDispatch} from "react-redux";
import {addToCard, removeCart} from "../../Redux/Action/Action"
import "./cart-item.css";

export const CartItem = (props) => {
    let dispatch = useDispatch();
    return (
        <>
            <div className="row mb-4">
                <div className="col-md-5 col-lg-3 col-xl-3">
                    <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                        <img className="img-fluid w-100" src={props.img_url} />
                    </div>
                </div>
                <div className="col-md-7 col-lg-9 col-xl-9">
                    <div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5>{props.name}</h5>
                                <p className="mb-3 text-muted text-uppercase small">Size: {props.size.join(",")}</p>
                                <p className="mb-2 text-muted text-uppercase small">Topping(s): {props.toppings.join(",")}</p>
                            </div>
                            <div>
                                <div className="def-number-input number-input safari_only mb-0 w-100">
                                    <button className="minus decrease" 
                                        onClick={() => dispatch(addToCard({...props}))}
                                    >+</button>
                                    {/* <input className="quantity" name="quantity" defaultValue={props.quantity} type="number" /> */}
                                    <p className="quantity">{props.quantity}</p>
                                    <button className="plus increase"
                                        onClick={() => dispatch(removeCart({...props}))}
                                    >-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mb-4" />
        </>
    )
}