import React from 'react';
import ConfirmPopup from './confirm-popup';
import { PopupState } from '../../enums/popup-state';
import { restartGameAction } from './../../store/actions/restart-game-action';
import { RootReducerState } from '../../store/root-reducer-state';
import { switchRestartConfirmationPopupAction } from '../../store/actions/switch-restart-confirmation-popup-action';
import { useContent } from '../../hooks/use-content';
import { useDispatch, useSelector } from 'react-redux';

export default function ResartGameConfirmPopup () {
    const dispatch = useDispatch();
    const content = useContent();
    const popupState = useSelector((state: RootReducerState) => state.gameBoard.popupState);

    return (
        <ConfirmPopup 
            open={popupState === PopupState.RESTART_CONFIRMATION_POPUP} 
            onClose={() => dispatch(switchRestartConfirmationPopupAction(false))}
            onConfirm={() => dispatch(restartGameAction())}
            confirmationTitle={content.restartConfirmation.title}
            confirmationText={content.restartConfirmation.text}
            />
    )
}