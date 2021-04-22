import { Actions } from '../../enums/actions';
import { Action } from './../../models/action';
import { Lang } from '../../enums/lang';
import { LangState } from './../states/lang-state';
import { LANG_KEY } from '../../constants/storage-keys';

const initState: LangState = {
    current: (localStorage.getItem(LANG_KEY) as Lang) || Lang.EN,
}

export const langReducer = (state = initState, action: Action) => {
    switch(action && action.type) {
        case Actions.SELECT_LANG:
            localStorage.setItem(LANG_KEY, action.payload.lang);

            return ({
                current: action.payload.lang
            });
        default:
            return state;
    }
}