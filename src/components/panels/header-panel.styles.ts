import { makeStyles } from "@material-ui/core";

export const useHeaderPanelStyles = makeStyles((theme) => ({
    container: {
        flex: '0 0 30',
        height: 30,
    },
    lang: {
        float: 'right',
    }
}));