import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography, Button, Switch} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { toggleSwitch } from '../../redux-store/action/Action';


const useStyles = makeStyles( theme => ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing(2)
      },
      title: {
        flexGrow: 1,
      },
}))


function Header() {
    // const [darkMode, setDarkMode] = useState(false);
    const mode = useSelector(state => state.sampleReducer.mode);
    // const state1 = useSelector(state => state);
    const classes = useStyles();
    const dispatch = useDispatch();
    console.log({mode});
    // console.log({state1});
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Admin panel
                    </Typography>
                    <Switch checked={mode} onChange={()=> dispatch(toggleSwitch())}></Switch>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
