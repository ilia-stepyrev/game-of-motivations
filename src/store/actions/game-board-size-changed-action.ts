import { Action } from './../../models/action';
import { Actions } from "../../enums/actions";

export const gameBoardSizeChangedAction = (): Action => ({type: Actions.GAME_BOARD_SIZE_CHANGED});