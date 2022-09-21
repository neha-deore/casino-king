import { GiClubs, GiDiamonds, GiHearts, GiSpades } from 'react-icons/gi';
export function readStore(name) {
   return new Promise((resolve) => {
      const data = localStorage.getItem(name);
      resolve(data);
   });
}

export function writeStore(name, content) {
   return new Promise((resolve) => {
      localStorage.setItem(name, content);
      resolve();
   });
}

export function getRandomSlots() {
   const randomSlot = () => {
      const array = ['GiSpades', 'GiClubs', 'GiDiamonds', 'GiHearts'];
      return array[Math.floor(Math.random() * array.length)];
   };

   return [randomSlot(), randomSlot(), randomSlot()];
}

export function getResults(slots) {
   const [a, b, c] = slots;
   // if no match - do not change score || even if 121
   const isNotMatch = (a !== b && b !== c && a !== c) || (a == c && a !== b);

   // if there is a pair - 112 or 122
   const isPair = (a == b && b !== c) || (a !== b && b == c);

   // if 777 (!)
   const isBingo = a == 'GiSpades' && b == 'GiSpades' && c == 'GiSpades';

   // if three in a row (but not 777)
   const isThreeInRow = a == b && b == c;

   if (isNotMatch) {
      return {
         amount: 0,
         text: 'Sorry, you lost. Try one more time...',
      };
   }

   if (isPair) {
      return {
         amount: 0.5,
         text: `Congrats! You won $0.5. Keep it going.`,
      };
   }

   if (isBingo) {
      return {
         amount: 5,
         text: `Yahooo! Bingo! You won $10! Amazing!`,
      };
   }

   if (isThreeInRow) {
      return {
         amount: 2,
         text: `Wow! Three in a row! You won $5. You are so close to success!`,
      };
   }

   console.log('Passed slots', slots);

   return {
      amount: 404,
      text: 'There is some error. Open Console.',
   };
}
