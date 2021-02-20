import React from "react";
import './pizzaList.css';
import { useSelector,useDispatch } from "react-redux";
import { PizzaCart } from '../pizza-cart/pizzacart'

export const PizzaList = (props) => {
    const pizaaData = useSelector(state => state.pizzaReducer.data);
    return(
    <div className="card-list">
        {pizaaData.map((val,idx) => (
            <PizzaCart key={idx} {...val} />
        ))}
    </div>
)}