import { CardType } from "../../enums/card-type";
import { GameState } from "../../enums/game-state";
import { PopupState } from "../../enums/popup-state";

export interface GameBoardState {
    deck: Array<CardType>,
    gameState: GameState,
    popupState: PopupState,
    result: Array<CardType>,
    selectedCard?: CardType,
}