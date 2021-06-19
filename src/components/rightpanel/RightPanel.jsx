import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import Box from '../box/Box';


function RightPanel() {
    return (
        <Grid container spacing={4} justify="center">
            <Grid item md={5}>
                <Box title="Revenue" details="$45000" />
            </Grid>
            <Grid item md={5}>
                <Box title="Total Sales" details="$45000" />
            </Grid>
        </Grid>
    )
}

export default RightPanel
