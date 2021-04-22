import { Actions } from '../../enums/actions';
import { Action } from '../../models/action';
import { calculateCardSize } from '../../services/calculate-card-size';
import { CARD_RATIO_HEIGHT_TO_WIDTH, NUMBER_OF_CARDS_WITH_DECK } from '../../constants/card-constants';
import { CLOSED_MENU_PANEL_HEIGHT, POPUP_MARGIN } from './../../constants/panels-constants';
import { GameBoardDimensionState } from '../states/game-board-dimension-state';
import { OPEN_MENU_PANEL_HEIGHT } from '../../constants/panels-constants';

const initState: GameBoardDimensionState = {
    ...calculateGameBoardSize(false),
    ...calculateSelectedCardSize(),
    isPanelExpanded: false
}

export const gameBoardDimensionReducer = (state = initState, action: Action) => {
    switch(action && action.type) {
        case Actions.GAME_BOARD_SIZE_CHANGED:
            return ({
                ...state,
                ...calculateGameBoardSize(state.isPanelExpanded),
                ...calculateSelectedCardSize(),
            });
        case Actions.EXPAND_MENU_PANEL:
            return ({
                ...state,
                ...calculateGameBoardSize(action.payload.isPanelExpanded),
                isPanelExpanded: action.payload.isPanelExpanded,
            })
        default:
            return state;
    }
}

function calculateGameBoardSize (isPanelExpanded: boolean) {
    const width = window.innerWidth;
    const height = window.innerHeight - (isPanelExpanded ? OPEN_MENU_PANEL_HEIGHT : CLOSED_MENU_PANEL_HEIGHT);

    return ({
        width,
        height,
        ...calculateCardSize(width, height, CARD_RATIO_HEIGHT_TO_WIDTH, NUMBER_OF_CARDS_WITH_DECK)
    });
}

function calculateSelectedCardSize() {
    let width = window.innerWidth - POPUP_MARGIN;
    let height = window.innerHeight - POPUP_MARGIN;
    const isWidthBased = width * CARD_RATIO_HEIGHT_TO_WIDTH < height;
    width = isWidthBased ? width : height / CARD_RATIO_HEIGHT_TO_WIDTH;
    height = isWidthBased ? width * CARD_RATIO_HEIGHT_TO_WIDTH : height;

    return ({
        selectedCardWidth: width,
        selectedCardHeight: height,
    })
}