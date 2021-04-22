import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
import { closeCompleteGamePopupAction } from './../../store/actions/close-complete-game-popup-action';
import { CompleteGameReason } from '../../enums/complete-game-reason';
import { FreeBreakfast, People, Person, WatchLater } from '@material-ui/icons';
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { RootReducerState } from './../../store/root-reducer-state';
import { PopupState } from '../../enums/popup-state';
import { useContent } from '../../hooks/use-content';
import { useDispatch, useSelector } from 'react-redux';


export default function CompleteGamePopup() {
    const dispatch = useDispatch();
    const content = useContent();
    const popupState = useSelector((state: RootReducerState) => state.gameBoard.popupState);
    const onClose = (reason: CompleteGameReason) => dispatch(closeCompleteGamePopupAction(reason));
    const listOptions = [
        {reason: CompleteGameReason.PLAY_SINGLE, title: content.completeGamePopup.playSingle, icon: <Person />},
        {reason: CompleteGameReason.PLAY_MULTIPLE, title: content.completeGamePopup.playMultiple, icon: <People />},
        {reason: CompleteGameReason.TEST_ONLY, title: content.completeGamePopup.testOnly, icon: <FreeBreakfast />},
        {reason: CompleteGameReason.CONTINUE, title: content.completeGamePopup.continue, icon: <WatchLater />},
    ];

    return (
    <Dialog open={popupState === PopupState.COMPLETE_GAME_POPUP} onClose={() => onClose(CompleteGameReason.CONTINUE)}>
        <DialogTitle>{content.completeGamePopup.title}</DialogTitle>
        <List>
            {listOptions.map(opt => <ListItem button onClick={() => onClose(opt.reason)} key={opt.reason}>
                <ListItemAvatar>{opt.icon}</ListItemAvatar>
                <ListItemText primary={opt.title} />
            </ListItem>)}
        </List>
    </Dialog>
  );
}