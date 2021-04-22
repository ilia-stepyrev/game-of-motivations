import { Action } from '../../models/action';
import { Actions } from '../../enums/actions';
import { CardType } from '../../enums/card-type';

export const selectCardAction = (card: CardType): Action => {
    return ({
        type: Actions.SELECT_CARD,
        payload: {
            selectedCard: card,
        }
    });
}