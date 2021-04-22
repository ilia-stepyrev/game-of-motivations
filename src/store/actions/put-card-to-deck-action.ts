import { Action } from '../../models/action';
import { Actions } from '../../enums/actions';
import { CardType } from '../../enums/card-type';
import { RootReducerState } from '../root-reducer-state';

export const putCardToDeckAction = (card: CardType): ((state: RootReducerState) => Action) => {
    return state => {
        const cardIndex = state.gameBoard.result.indexOf(card);
        const result = [...state.gameBoard.result];

        if (cardIndex >= 0) {
            result.splice(cardIndex, 1);
        }

        return ({
            type: Actions.PUT_CARD_TO_DECK,
            payload: {
                card,
                cardIndex,
                result
            }
        });
    }
}