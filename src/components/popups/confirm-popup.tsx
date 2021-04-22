import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useContent } from './../../hooks/use-content';

interface ConfirmPopupProps {
    confirmationText: string,
    confirmationTitle: string,
    onClose: () => any,
    onConfirm: () => any,
    open: boolean,
}

export default function ConfirmPopup({open, confirmationTitle, confirmationText, onClose, onConfirm}: ConfirmPopupProps) {
    const content = useContent();
    return (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>{confirmationTitle}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                {confirmationText}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={onConfirm} color="primary">
                {content.confirmation.yes}
            </Button>
            <Button onClick={onClose} color="primary" autoFocus>
                {content.confirmation.no}
            </Button>
        </DialogActions>
    </Dialog>
  );
}