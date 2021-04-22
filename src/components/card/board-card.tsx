import React from 'react';
import Card from "./card";
import { CardType } from "../../enums/card-type";
import { RootReducerState } from './../../store/root-reducer-state';
import { useSelector } from 'react-redux';

export interface BoardCardProps {
    card: CardType,
    zoomable: boolean,
}

export default function BoardCard ({card, zoomable}: BoardCardProps) {
    const {cardWidth, cardHeight} = useSelector((state: RootReducerState) => state.gameBoardDimension);

    return (
        <Card zoomable={zoomable} card={card} cardHeight={cardHeight} cardWidth={cardWidth}/>
    )
}