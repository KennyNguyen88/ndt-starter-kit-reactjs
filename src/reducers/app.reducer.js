import { SAY_HI } from '../actions/default';

export default (state = {}, action) => {
    switch(action.type) {
        case SAY_HI:
            return action.payload;
        default:
            return state;
    }
}