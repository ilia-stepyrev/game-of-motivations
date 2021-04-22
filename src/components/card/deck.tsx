import React from 'react';
import { Button } from '@material-ui/core';
import { Check, Refresh } from '@material-ui/icons';
import { GameState } from '../../enums/game-state';
import { nextCardAction } from '../../store/actions/next-card-action';
import { openCompleteGamePopupAction } from './../../store/actions/open-complete-game-popup-action';
import { RootReducerState } from '../../store/root-reducer-state';
import { switchRestartConfirmationPopupAction } from './../../store/actions/switch-restart-confirmation-popup-action';
import { useDeckStyles } from './deck.styles';
import { useSelector, useDispatch } from 'react-redux';
import { useContent } from './../../hooks/use-content';

export default function Deck () {
    const {cardWidth, cardHeight, cardsPerRow} = useSelector((state: RootReducerState) => state.gameBoardDimension);
    const {deck, gameState} = useSelector((state: RootReducerState) => state.gameBoard);
    const classes = useDeckStyles(cardWidth, cardHeight, cardsPerRow)();
    const dispatch = useDispatch();
    const content = useContent();
    const isActive = gameState === GameState.ACTIVE;

    return (
        <div className={classes.wrapper}>
            {deck.length 
                ? <div className={classes.deck} onClick={() => dispatch(nextCardAction())} /> 
                : <div className={classes.restartGame}>
                    <Button variant='contained' color='default' startIcon={isActive ? <Check /> : <Refresh />} 
                            onClick={() => dispatch(isActive ? openCompleteGamePopupAction() : switchRestartConfirmationPopupAction(true))}>
                        {isActive ? content.completeGame : content.restartGame }
                    </Button>
                </div>}
        </div>
    )
}