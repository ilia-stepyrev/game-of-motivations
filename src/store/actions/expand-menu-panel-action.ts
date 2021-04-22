import { Action } from '../../models/action';
import { Actions } from "../../enums/actions";

export const expandMenuPanelAction = (isPanelExpanded: boolean): Action => ({
    type: Actions.EXPAND_MENU_PANEL,
    payload: {
        isPanelExpanded
    }
});