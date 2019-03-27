import { GET_BOSSES } from '../Constants/Constants';
import BossService from '../services/BossService';

export const getBosses = () => {
    return dispatch => {
        return BossService.getBosses().then(d => {
            dispatch(getBossesSuccess(d));
        });
    };
};
const getBossesSuccess = bosses => {
    return {
        type: GET_BOSSES,
        payload: bosses
    };
};