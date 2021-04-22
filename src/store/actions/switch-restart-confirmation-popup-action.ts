import { Action } from '../../models/action';
import { Actions } from '../../enums/actions';

export const switchRestartConfirmationPopupAction = (popupState: boolean): Action => {
    return ({
        type: Actions.SWITCH_RESTART_CONFIRMATION_POPUP,
        payload: {
            popupState
        }
    });
}