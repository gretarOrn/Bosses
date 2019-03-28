import { combineReducers } from 'redux';
import bosses from './bossReducer';
import boss from './singleBossReducer';

export default combineReducers({
    bosses,
    boss
});