import { Action } from "./ActionType";
import axios from "axios";

export const fetchData = () => async (dispatch) => {
    const response = await axios.get("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68");
    const data =  response.data;
    dispatch({
        type : Action.FETCH_DATA,
        data : [...data ]
    })
};

export const sortData = (sortBy) => ({
    type : Action.SORT_DATA,
    sortBy 
})

export const filterByType = (filterBy) => ({
    type : Action.FILTER_BY,
    filterBy
})

export const addToCard = (item) => ({
    type: Action.ADDTO_CART,
    item
})