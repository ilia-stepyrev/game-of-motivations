import { Lang } from "../enums/lang";
import { LangDefinition } from './../models/lang-definition';
import { enLang } from './langs/en-lang';
import { ruLang } from './langs/ru-lang';

export const SupportedLangs: Map<Lang, LangDefinition> = new Map([
    [Lang.EN, enLang],
    [Lang.RU, ruLang],
]);