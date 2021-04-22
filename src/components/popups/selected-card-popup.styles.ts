import { makeStyles } from "@material-ui/core";

export const useSelectedCardPopupStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1000
    },
    backdrop: {
        background: 'black',
        opacity: 0.7,
        width: '100%',
        height: '100%'
    },
    wrapper: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%'
    },
    button: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 250,
        height: 50
    }
}));