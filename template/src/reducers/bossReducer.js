import { GET_BOSSES } from '../Constants/Constants';
import { POST_BOSS } from '../Constants/Constants';

export default function(state = [], action) {
    switch(action.type) {
        case GET_BOSSES: return action.payload;
        case POST_BOSS: return [...state, {id: action.payload.id, ...action.payload.boss}];
        default: return state;
    };
};