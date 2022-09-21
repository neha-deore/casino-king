import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { GiClubs, GiDiamonds, GiHearts, GiSpades } from 'react-icons/gi';

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
         margin: theme.spacing(1),
         minWidth: theme.spacing(8),
         minHeight: theme.spacing(8),
         maxWidth: theme.spacing(16),
         maxHeight: theme.spacing(16),
      },
      justifyContent: 'center',
   },
   slotText: {
      fontSize: 60,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
}));

export default function Slots({
   slots = ['GiSpades', 'GiSpades', 'GiSpades'],
}) {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         {slots.map((slot, i) => (
            <Paper elevation={1} key={i} component="div">
               <div className={classes.slotText}>
                  {slot == 'GiSpades' ? (
                     <GiSpades />
                  ) : slot == 'GiDiamonds' ? (
                     <GiDiamonds />
                  ) : slot == 'GiHearts' ? (
                     <GiHearts />
                  ) : (
                     <GiClubs />
                  )}
               </div>
            </Paper>
         ))}
      </div>
   );
}
