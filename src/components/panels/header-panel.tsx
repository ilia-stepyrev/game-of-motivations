import { Button } from '@material-ui/core';
import React from 'react';
import { RootReducerState } from './../../store/root-reducer-state';
import { selectLangAction } from './../../store/actions/select-lang-action';
import { SupportedLangs } from '../../constants/supported-langs';
import { useHeaderPanelStyles } from './header-panel.styles';
import { useSelector, useDispatch } from 'react-redux';

export default function HeaderPanel () {
    const classes = useHeaderPanelStyles();
    const dispatch = useDispatch();
    const {current} = useSelector((state: RootReducerState) => state.lang);

    return (
        <div className={classes.container}>
            {Array.from(SupportedLangs.keys()).map(lang => <Button key={lang} className={classes.lang} 
                    color={current === lang ? 'primary' : 'secondary'} onClick={() => dispatch(selectLangAction(lang))}>
                {SupportedLangs.get(lang).title}
            </Button>)}
        </div>
    )
}