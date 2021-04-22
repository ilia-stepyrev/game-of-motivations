import React, { useEffect } from 'react';
import CompleteGamePopup from '../popups/complete-game-popup';
import GamePanel from './game-panel';
import HeaderPanel from './header-panel';
import MenuPanel from './menu-panel';
import ResartGameConfirmPopup from '../popups/restart-game-confirm-popup';
import SelectedCardPopup from '../popups/selected-card-popup';
import { debounce } from './../../services/debounce';
import { gameBoardSizeChangedAction } from './../../store/actions/game-board-size-changed-action';
import { useMainPanelStyles } from './main-panel.styles';
import { useDispatch } from 'react-redux';

export default function MainPanel () {
    const classes = useMainPanelStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        const debouncedHandleResize = debounce(() => dispatch(gameBoardSizeChangedAction()), 500);
        window.addEventListener('resize', debouncedHandleResize);

        return () => window.removeEventListener('resize', debouncedHandleResize);
    }, []);

    return (
        <div className={classes.container}>
            <HeaderPanel />
            <GamePanel />
            <MenuPanel />
            <SelectedCardPopup />
            <ResartGameConfirmPopup />
            <CompleteGamePopup />
        </div>
    )
}