import { Action } from '../../models/action';
import { Actions } from '../../enums/actions';
import { CompleteGameReason } from '../../enums/complete-game-reason';

export const closeCompleteGamePopupAction = (reason: CompleteGameReason): Action => {
    return ({
        type: Actions.CLOSE_COMPLETE_GAME_POPUP,
        payload: {
            reason
        }
    });
}