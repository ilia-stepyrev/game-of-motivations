import { Action } from '../../models/action';
import { Actions } from '../../enums/actions';

export const openCompleteGamePopupAction = (): Action => {
    return ({
        type: Actions.OPEN_COMPLETE_GAME_POPUP,
        payload: {}
    });
}