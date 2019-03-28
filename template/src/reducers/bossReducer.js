import { GET_BOSSES } from '../Constants/Constants';
import { POST_BOSS } from '../Constants/Constants';
import { DELETE_BOSS_BY_ID} from '../Constants/Constants';
import { UPDATE_BOSS_BY_ID } from '../Constants/Constants';

export default function(state = [], action) {
    switch(action.type) {
        case GET_BOSSES: return action.payload;
        case POST_BOSS: return [...state, {id: action.payload.id, ...action.payload.boss}];
        case DELETE_BOSS_BY_ID: return state.filter(boss => boss.id != action.payload);
        case UPDATE_BOSS_BY_ID: for(var i = 0; i < state.length; i++){
                                    if(state[i].id == action.payload.id){
                                        state.splice(i,1, action.payload );
                                    };
                                }return state;
        default: return state;
    };
};

