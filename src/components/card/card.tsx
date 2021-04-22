import React from 'react';
import { CardImages } from './../../constants/card-images';
import { CardType } from '../../enums/card-type';
import { selectCardAction } from './../../store/actions/select-card-action';
import { useCardStyles } from './card.styles';
import { useContent } from './../../hooks/use-content';
import { useDispatch } from 'react-redux';
import { ZoomIn } from '@material-ui/icons';

export interface CardProps {
    card: CardType,
    cardHeight: number,
    cardWidth: number,
    onClick?: () => void,
    zoomable: boolean,
}

export default function Card ({card, zoomable, cardWidth, cardHeight, onClick}: CardProps) {
    const classes = useCardStyles(cardWidth, cardHeight)();
    const content = useContent();
    const dispatch = useDispatch();
    const cardContent = content.cards[card];

    return (
        <div className={classes.wrapper} onClick={() => onClick && onClick()}>
            <div className={classes.container}>
                {zoomable ? <div className={classes.button} onClick={() => dispatch(selectCardAction(card))}>
                    <ZoomIn />
                </div> : null}
                <div className={classes.title}>{cardContent.title}</div>
                <div className={classes.imageWrapper}><img src={CardImages[card]} id={card} draggable={false}/></div>
                <div className={classes.predescription}>{content.cardParts.predescription}</div>
                <div className={classes.description}>{cardContent.description}</div>
                <div className={classes.postdescription}>{content.cardParts.postdescription}</div>
            </div>
        </div>
    )
}