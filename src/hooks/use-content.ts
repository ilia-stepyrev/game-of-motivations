import { LangContent } from './../models/lang-content';
import { RootReducerState } from './../store/root-reducer-state';
import { SupportedLangs } from '../constants/supported-langs';
import { useSelector } from 'react-redux';

export const useContent = (): LangContent => {
    const currentLang = useSelector((state: RootReducerState) => state.lang.current);
    const lang = SupportedLangs.get(currentLang);
    return lang.content;
}
