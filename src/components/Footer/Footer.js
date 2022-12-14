import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   appBar: {
      top: 'auto',
      bottom: 0,
      backgroundColor: 'grey',
      color: 'black',
   },
   grow: {
      flexGrow: 1,
   },
}));

export default function Footer() {
   const classes = useStyles();

   return (
      <AppBar position="static" className={classes.appBar}>
         <Toolbar>
            <Typography variant="body2" color="inherit">
               Copyright © CasinoKING 2022.Neha Deore.
            </Typography>
         </Toolbar>
      </AppBar>
   );
}
