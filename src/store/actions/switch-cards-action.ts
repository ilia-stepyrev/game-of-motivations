import { Action } from '../../models/action';
import { Actions } from '../../enums/actions';
import { RootReducerState } from '../root-reducer-state';
import { swap } from 'react-grid-dnd';

export const switchCardsAction = (sourceIndex: number, targetIndex: number): ((state: RootReducerState) => Promise<Action>) => {
    return (state: RootReducerState) => {
        return Promise.resolve({
            type: Actions.UPDATE_CARDS_STATE,
            payload: {
                deck: state.gameBoard.deck,
                result: swap(state.gameBoard.result, sourceIndex, targetIndex)
            }
        });
    }
}