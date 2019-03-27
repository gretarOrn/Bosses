import { GET_BOSSES } from '../Constants/Constants';

export default function(state = [], action) {
    switch(action.type) {
        case GET_BOSSES: return action.payload;
        default: return state;
    };
};