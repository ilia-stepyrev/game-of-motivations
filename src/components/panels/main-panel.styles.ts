import { makeStyles } from "@material-ui/core";

export const useMainPanelStyles = makeStyles((theme) => ({
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(to bottom, #C19A6B 0%, #B28B5C 100%)',
        position: 'relative',
    }
}));