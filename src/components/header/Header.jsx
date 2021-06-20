import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, FormControlLabel, Typography, Button, Switch} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { toggleSwitch } from '../../redux-store/action/Action';

function Header() {
    const useStyles = makeStyles( theme => ({
        root: {
            flexGrow: 1,
            marginBottom: theme.spacing(2)
          },
          title: {
            flexGrow: 1,
          },
    }))
    // const [darkMode, setDarkMode] = useState(false);
    const mode = useSelector(state => state.toggleReducer.mode);
    // const state1 = useSelector(state => state);
    const classes = useStyles();
    const dispatch = useDispatch();
    console.log({mode});
    // console.log({state1});
    return (
        <div className={classes.root}>
            <AppBar color={mode ? 'black' : 'primary'} position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Admin panel
                    </Typography>
                    <FormControlLabel 
                        control={
                            <Switch
                                name="Toggle Theme"
                                checked={mode} 
                                onChange={()=> dispatch(toggleSwitch())}
                            />
                    }/>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
