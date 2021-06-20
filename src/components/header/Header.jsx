import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, FormControlLabel, Typography, Button, Switch } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { toggleSwitch } from '../../redux-store/action/Action';

function Header() {
    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
            marginBottom: theme.spacing(2)
        },
        title: {
            flexGrow: 1,
        },
        menu: {
            display: 'flex',
            listStyle: 'none',
            width: "25%",
            justifyContent: "space-around",
            cursor: 'pointer',
            padding: '0px'
        },
        menuItem:{
            textDecoration: "none",
            color: "#fff",
            fontSize: "16px"
        }
    }))

    const mode = useSelector(state => state.toggleReducer.mode);
    const classes = useStyles();
    const dispatch = useDispatch();
    console.log({ mode });

    return (
        <div className={classes.root}>
            <AppBar color={mode ? 'black' : 'primary'} position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Admin panel
                    </Typography>
                    <ul className={classes.menu}>
                        <li><Link className={classes.menuItem} to='/home'>Home</Link></li>
                        <li><Link className={classes.menuItem} to='/aboutUs'>About-us</Link></li>
                        <li><Link className={classes.menuItem} to='/contactUs'>Contact-us</Link></li>
                        <li style={{ marginRight: '15px' }}><Link className={classes.menuItem} to='/products'>Products</Link></li>
                    </ul>
                    <FormControlLabel
                        control={
                            <Switch
                                name="Toggle Theme"
                                checked={mode}
                                onChange={() => dispatch(toggleSwitch())}
                            />
                        } />
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
