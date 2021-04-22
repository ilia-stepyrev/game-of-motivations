import { Action } from '../../models/action';
import { Actions } from '../../enums/actions';
import { analyticsPusher } from './../../services/analytics-pusher';
import { CompleteGameReason } from '../../enums/complete-game-reason';
import { CardType } from '../../enums/card-type';
import { GameState } from '../../enums/game-state';
import { GameBoardState } from './../states/game-board-state';
import { GAME_STATE_KEY, CARD_STATE_KEY } from './../../constants/storage-keys';
import { PopupState } from '../../enums/popup-state';

const initState: GameBoardState = { 
    ...getInitState(),
    ...loadStateFromStorage(GAME_STATE_KEY),
    ...loadStateFromStorage(CARD_STATE_KEY),
};

export const gameBoardReducer = (state = initState, action: Action) => {
    switch(action && action.type) {
        case Actions.CLOSE_COMPLETE_GAME_POPUP:
            analyticsPusher.pushCardResults(state.result, action.payload.reason);

            return ({
                ...state,
                gameState: updateGameStateInStorage(action.payload.reason === CompleteGameReason.CONTINUE
                    ? GameState.ACTIVE : GameState.COMPLETED).gameState,
                popupState: PopupState.NO,
            });
        case Actions.GET_CARD:
            if (action.payload.cardIndex < 0) return ({...state});

            return({
                ...state,
                ...updateCardsInStorage(action.payload.deck, [...state.result, action.payload.card]),
                selectedCard: action.payload.card,
            });
        case Actions.NEXT_CARD:
            return ({
                ...state,
                ...updateCardsInStorage(action.payload.deck, [...state.result, action.payload.card]),
                selectedCard: action.payload.card,
            });
        case Actions.OPEN_COMPLETE_GAME_POPUP:
            return ({
                ...state,
                popupState: PopupState.COMPLETE_GAME_POPUP
            });
        case Actions.PUT_CARD_TO_DECK:
            if (action.payload.cardIndex < 0) return ({...state});

            return({
                ...state,
                ...updateCardsInStorage([...state.deck, action.payload.card], action.payload.result),
                selectedCard: null,
            });
        
        case Actions.RESTART_GAME:
            const {deck, result, selectedCard, gameState, popupState} = getInitState();
            return ({
                ...state,
                ...updateCardsInStorage(deck, result),
                ...updateGameStateInStorage(gameState),
                selectedCard,
                popupState,
            });
        case Actions.SELECT_CARD:
            return ({
                ...state,
                selectedCard: action.payload.selectedCard,
            });
        case Actions.SWITCH_RESTART_CONFIRMATION_POPUP:
            return ({
                ...state,
                popupState: action.payload.popupState ? PopupState.RESTART_CONFIRMATION_POPUP : PopupState.NO,
            });
        case Actions.UPDATE_CARDS_STATE:
            return ({
                ...state,
                ...updateCardsInStorage(action.payload.deck, action.payload.result),
            });
        default:
            return state;
    }
}

function getInitState(): GameBoardState {
    return ({
        deck: Object.values(CardType).sort(() => 0.5 - Math.random()),
        gameState: GameState.ACTIVE,
        popupState: PopupState.NO,
        result: [],
        selectedCard: null,
    });
}

function loadStateFromStorage(key: string) {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
}

function updateCardsInStorage(deck: Array<CardType>, result: Array<CardType>) {
    localStorage.setItem(CARD_STATE_KEY, JSON.stringify({deck, result}));
    return ({ deck, result })
}

function updateGameStateInStorage (gameState: GameState) {
    localStorage.setItem(GAME_STATE_KEY, JSON.stringify({gameState}));
    return ({ gameState })
}