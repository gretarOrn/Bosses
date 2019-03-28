import { GET_BOSSES } from '../Constants/Constants';
import { POST_BOSS } from '../Constants/Constants';
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

export const postBoss = boss => {
    return dispatch => {
        return BossService.postBoss(boss).then(resp => {
            dispatch(postBossSuccess(resp.id, boss));
            return resp.id;
        });
    };
};

const postBossSuccess = (id, boss) => {
    return {
        type: POST_BOSS,
        payload: {
            id,
            boss
        }
    };
};