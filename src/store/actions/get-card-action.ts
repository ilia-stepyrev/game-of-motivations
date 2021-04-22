import { Action } from '../../models/action';
import { Actions } from '../../enums/actions';
import { CardType } from '../../enums/card-type';
import { RootReducerState } from '../root-reducer-state';

export const getCardAction = (card: CardType): ((state: RootReducerState) => Action) => {
    return state => {
        const cardIndex = state.gameBoard.deck.indexOf(card);
        const deck = [...state.gameBoard.deck];

        if (cardIndex >= 0) {
            deck.splice(cardIndex, 1);
        }

        return ({
            type: Actions.GET_CARD,
            payload: {
                card,
                cardIndex,
                deck
            }
        });
    } 
}