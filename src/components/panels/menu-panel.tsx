import React, { Fragment } from 'react';
import Card from '../card/card';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, IconButton } from '@material-ui/core';
import { CARD_RATIO_HEIGHT_TO_WIDTH, MENU_CARD_HEIGHT } from './../../constants/card-constants';
import { expandMenuPanelAction } from './../../store/actions/expand-menu-panel-action';
import { getCardAction } from './../../store/actions/get-card-action';
import { Refresh } from '@material-ui/icons';
import { RootReducerState } from './../../store/root-reducer-state';
import { switchRestartConfirmationPopupAction } from '../../store/actions/switch-restart-confirmation-popup-action';
import { useContent } from './../../hooks/use-content';
import { useDispatch, useSelector } from 'react-redux';
import { useMenuPanelStyles } from './menu-panel.styles';

export default function MenuPanel () {
    const classes = useMenuPanelStyles();
    const dispatch = useDispatch();
    const height = MENU_CARD_HEIGHT;
    const width = height / CARD_RATIO_HEIGHT_TO_WIDTH;
    const content = useContent();
    const cards = useSelector((state: RootReducerState) => state.gameBoard.deck).slice()
        .sort((a, b) => content.cards[a].title > content.cards[b].title ? 1 : -1)

    return (
        <div className={classes.container}>
            <Accordion onChange={(e, expanded) => dispatch(expandMenuPanelAction(expanded))}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>

                </AccordionSummary>

                <AccordionDetails>
                    <div className={classes.cardWrapper}>
                        <div className={classes.cardContainer}>
                            {cards.map(c => <Fragment key={c}>
                                <Card zoomable={false} card={c} cardHeight={height} cardWidth={width} 
                                    onClick={() => dispatch(getCardAction(c))}/>
                            </Fragment>)}
                        </div>
                        <div className={classes.button}>
                            <IconButton color="default" component="span" title={content.restartGame}
                                    onClick={() => dispatch(switchRestartConfirmationPopupAction(true))}>
                                <Refresh />
                            </IconButton>
                        </div>
                    </div>
                    
                </AccordionDetails>
            </Accordion>
        </div>
    )
}