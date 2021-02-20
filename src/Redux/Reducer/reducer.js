import {Action} from "../Action/ActionType";
import { sortData } from '../../utils/utils';

const defaultValue = {
    data: [],
    sortBy: '',
    filterBy: '',
    totalData: []
}

function pizzaReducer (state = defaultValue, action) {
    debugger
    switch (action.type) {
        case Action.FETCH_DATA : 
            return {
                ...state,
                data: [...action.data],
                totalData : [...action.data]
            }
        case Action.SORT_DATA : 
            return {
                ...state,
                data : sortData(action.sortBy,[...state.data]),
                totalData : sortData(action.sortBy,[...state.totalData]),
                sortBy : action.sortBy
            }
        case Action.FILTER_BY : 
            return{
                ...state,
                data : state.totalData.filter(dat => {
                    if(action.filterBy == dat.isVeg.toString()){
                        return true
                    }
                    if(action.filterBy === "") return true
                })
            }
        default:
            return {...state}       
    }
}

export default pizzaReducer;