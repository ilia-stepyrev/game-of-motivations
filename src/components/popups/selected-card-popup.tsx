import React from 'react';
import Card from '../card/card';
import { Button } from '@material-ui/core';
import { FlipToBack } from '@material-ui/icons';
import { putCardToDeckAction } from './../../store/actions/put-card-to-deck-action';
import { RootReducerState } from './../../store/root-reducer-state';
import { selectCardAction } from './../../store/actions/select-card-action';
import { useContent } from './../../hooks/use-content';
import { useDispatch, useSelector } from 'react-redux';
import { useSelectedCardPopupStyles } from './selected-card-popup.styles';

export default function SelectedCardPopup () {
    const dispatch = useDispatch();
    const classes = useSelectedCardPopupStyles();
    const content = useContent();
    const card = useSelector((state: RootReducerState) => state.gameBoard.selectedCard);
    const {selectedCardHeight, selectedCardWidth} = useSelector((state: RootReducerState) => state.gameBoardDimension);

    if (!card) {
        return null;
    }

    return (
        <div className={classes.container} onClick={() => dispatch(selectCardAction(null))}>
            <div className={classes.backdrop}></div>
            <div className={classes.wrapper}>
                <Card card={card} zoomable={false} cardHeight={selectedCardHeight} cardWidth={selectedCardWidth}/>
                <div className={classes.button}>
                    <Button variant='contained' color='default' startIcon={<FlipToBack />} 
                            onClick={() => dispatch(putCardToDeckAction(card))}>
                        {content.putCardBackToDeck}
                    </Button>
                </div>
            </div>
        </div>
    )
}