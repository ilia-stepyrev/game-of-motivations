import React from 'react';
import BoardCard from '../card/board-card';
import Deck from './../card/deck';
import { GridContextProvider, GridDropZone, GridItem } from 'react-grid-dnd';
import { RootReducerState } from './../../store/root-reducer-state';
import { switchCardsAction } from './../../store/actions/switch-cards-action';
import { useDispatch, useSelector } from 'react-redux';
import { useGamePanelStyles } from './game-panel.styles';

export default function GamePanel () {
    const classes = useGamePanelStyles();
    const dispatch = useDispatch();
    const {cardHeight, cardsPerRow} = useSelector((state: RootReducerState) => state.gameBoardDimension);
    const cards = useSelector((state: RootReducerState) => state.gameBoard.result);

    const onChange = (sourceId: string, sourceIndex: number, targetIndex: number, targetId: string) => {
        dispatch(switchCardsAction(sourceIndex, targetIndex));
    }

    return (
        <GridContextProvider onChange={onChange}>
            <GridDropZone
                id='items'
                boxesPerRow={cardsPerRow}
                rowHeight={cardHeight}
                className={classes.container}
            >
                {cards.map(item => (
                    <GridItem key={item}>
                        <BoardCard card={item} zoomable={true}/>
                    </GridItem>
                ))}

                <Deck />
            </GridDropZone>
        </GridContextProvider>
    )
}