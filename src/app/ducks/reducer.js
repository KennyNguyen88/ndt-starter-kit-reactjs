import {combineReducers} from "redux";
import {SAY_HI, SAY_YEAH} from "./actions";

/* State Shape
{
    appReducer: string,
    appTestReducer: string
}
 */

const appReducer = (state = {}, action) => {
    switch(action.type){
        case SAY_HI:
            return action.payload;
        default:
            return state;
    }
};

const appTestReducer = (state = {}, action) => {
    switch(action.type){
        case SAY_YEAH:
            return action.payload;
        default:
            return state;
    }
};


export default combineReducers({
    appReducer,
    appTestReducer
});