import { LangState } from './states/lang-state';
import { GameBoardDimensionState } from './states/game-board-dimension-state';
import { GameBoardState } from './states/game-board-state';

export interface RootReducerState {
    gameBoard: GameBoardState,
    gameBoardDimension: GameBoardDimensionState,
    lang: LangState,
}