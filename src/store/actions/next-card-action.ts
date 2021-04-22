import { Action } from '../../models/action';
import { Actions } from '../../enums/actions';
import { RootReducerState } from '../root-reducer-state';

export const nextCardAction = (): ((state: RootReducerState) => Action) => {
    return state => {
        const deck = [...state.gameBoard.deck];
        const card = deck.pop();

        return ({
            type: Actions.NEXT_CARD,
            payload: {
                card,
                deck
            }
        });
    } 
}