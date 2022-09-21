import React from 'react';
import { observer } from 'mobx-react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { DialogActions } from '@material-ui/core';

import { appStore } from '../../store/AppStore';
import { getRandomSlots, getResults } from '../../common/helpers';
import Slots from './GameSlots';
import { GiSpades } from 'react-icons/gi';

function GameDialog({ open, setOpen }) {
   const [spinnedSlots, setSpinnedSlots] = React.useState([
      <GiSpades />,
      <GiSpades />,
      <GiSpades />,
   ]);
   const [resultText, setResultText] = React.useState('');
   const { spin, score } = appStore;

   const handleGameClose = () => {
      setResultText('');
      setSpinnedSlots(['GiSpades', 'GiSpades', 'GiSpades']);
      setOpen(false);
   };

   const handleFakeSpin = async () => {
      const fakeSlots = ['GiSpades', 'GiSpades', 'GiSpades'];
      await handleSpin(fakeSlots);
   };

   const handleSpin = (slots = []) => {
      setResultText('');

      const randomSlots = slots.length ? slots : getRandomSlots();

      setSpinnedSlots(randomSlots);

      const { amount, text } = getResults(randomSlots);

      spin({
         amount,
         slots: randomSlots,
      });

      setResultText(text);
   };

   const isUserHasEnoughScore = () => score > 2;

   return (
      <Dialog
         open={open}
         onClose={handleGameClose}
         aria-labelledby="form-dialog-title"
      >
         <DialogTitle id="form-dialog-title">SLOT MACHINE</DialogTitle>
         <DialogContent>
            <Slots slots={spinnedSlots} />
            <DialogContentText>
               {isUserHasEnoughScore()
                  ? resultText
                  : 'Sorry. Your limit already finished'}
            </DialogContentText>

            <DialogActions>
               {isUserHasEnoughScore() && (
                  <>
                     <Button onClick={handleSpin} color="primary">
                        SPIN
                     </Button>
                     <Button onClick={handleFakeSpin} color="primary">
                        Get Fake Spin
                     </Button>
                  </>
               )}
               <Button onClick={handleGameClose} color="primary">
                  Close
               </Button>
            </DialogActions>
         </DialogContent>
      </Dialog>
   );
}

export default observer(GameDialog);
