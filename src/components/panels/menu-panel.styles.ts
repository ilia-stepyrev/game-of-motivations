import { makeStyles } from "@material-ui/core";

export const useMenuPanelStyles = makeStyles((theme) => ({
    container: {
        flex: '0 0 20px'
    },
    cardWrapper: {
        position: 'relative',
        height: 70,
        width: '100%'
    },
    cardContainer: {
        position: 'absolute',
        top: -40,
        left: 0,
        right: 40,
        display: 'flex'
    },
    button: {
        position: 'absolute',
        right: 5,
        bottom: 10,
        height: 30,
        width: 30
    }
}));