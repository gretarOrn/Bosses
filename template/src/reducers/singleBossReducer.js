import { GET_BOSS_BY_ID } from '../Constants/Constants';
import { UPDATE_BOSS_BY_ID } from '../Constants/Constants';

export default function(state = {}, action) {
    switch(action.type) {
        case GET_BOSS_BY_ID: return action.payload;
        case UPDATE_BOSS_BY_ID: return action.payload;
        default: return state;
    };
};