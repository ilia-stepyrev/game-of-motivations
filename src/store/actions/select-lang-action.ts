import { Action } from '../../models/action';
import { Actions } from '../../enums/actions';
import { Lang } from '../../enums/lang';

export const selectLangAction = (lang: Lang): Action => {
    return ({
        type: Actions.SELECT_LANG,
        payload: {
            lang
        }
    });
}