import { GET_BOSSES } from '../Constants/Constants';
import { POST_BOSS } from '../Constants/Constants';
import { GET_BOSS_BY_ID } from '../Constants/Constants';
import { DELETE_BOSS_BY_ID} from '../Constants/Constants';
import { UPDATE_BOSS_BY_ID } from '../Constants/Constants';
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
    console.log(boss.name);
    return dispatch => {
        return BossService.postBoss(boss).then(resp => {
            dispatch(postBossSuccess(resp.id, boss));
            //return resp.id;
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

export const getBossById = id => {
    return dispatch => {
        return BossService.getBossById(id).then(d => {
            dispatch(getBossByIdSuccess(d));
        });
    };
};

const getBossByIdSuccess = boss => {
    return {
        type: GET_BOSS_BY_ID,
        payload: boss
    };
};

export const deleteBossById = id => {
    return dispatch => {
        return BossService.deleteBossById(id).then(d => {
            dispatch(deleteBossByIdSuccess(d));
        });
    };
};
const deleteBossByIdSuccess = id => {
    return {
        type: DELETE_BOSS_BY_ID,
        payload: parseInt(id)
    };
};

export const updateBossById = (id, boss) => {
    return dispatch => {
        return BossService.updateBossById(id, boss).then(d => {
            dispatch(updateBossByIdSuccess(id, boss));
        });
    };
};

const updateBossByIdSuccess = (id, boss ) => {
    return {
        type: UPDATE_BOSS_BY_ID,
        payload: {id, ...boss}
    };
};