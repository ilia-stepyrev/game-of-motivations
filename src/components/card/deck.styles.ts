import { heightRatios, NUMBER_OF_CARDS_WITH_DECK } from '../../constants/card-constants';
import { makeStyles } from "@material-ui/core";

export const useDeckStyles = (cardWidth: number, cardHeight: number, cardsPerRow: number) => makeStyles((theme) => {
    const margin = heightRatios.cardMargin * cardHeight;
    const rows = NUMBER_OF_CARDS_WITH_DECK / cardsPerRow;
    const width = cardWidth - margin;
    cardWidth = Math.max(window.innerWidth / cardsPerRow, cardWidth);
    const hMargin = (cardWidth - width) / 2;
    const vMargin = margin / 2;

    return ({
        wrapper: {
            position: 'absolute',
            top: (rows - 1) * cardHeight,
            right: 0,
            height: cardHeight,
            width: cardWidth,
        },
        deck: {
            position: 'absolute',
            content: '""',
            top: vMargin,
            bottom: vMargin,
            right: hMargin,
            left: hMargin,
            backgroundImage: 'url("img/card-back.svg")',
            zIndex: 20
        },
        restartGame: {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }
    })
});