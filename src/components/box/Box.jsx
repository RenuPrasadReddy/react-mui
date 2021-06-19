import React from 'react'
import { Paper,Typography  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(4),
    },
    space: {
        marginBottom: theme.spacing(2)
    }
}))
function Box(props) {
    const classes = useStyles();
    const {title, details} = props;
    return (
        <Paper className={classes.paper}>
            <Typography className={classes.space} variant="h6">
                {title}
            </Typography>
            <Typography variant="subtitle1">{details}</Typography>
        </Paper>
    )
}

export default Box
