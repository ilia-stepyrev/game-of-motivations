import { Action } from '../../models/action';
import { Actions } from '../../enums/actions';

export const restartGameAction = (): Action => {
    return ({
        type: Actions.RESTART_GAME,
        payload: {}
    });
}