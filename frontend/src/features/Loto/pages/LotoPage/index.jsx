import { Grid, GridItem } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Main from '../../../../layouts/Main';
import LotoBoard from '../../components/LotoBoard';
import MemberBoard from '../../components/MemberBoard';

const Loto = () => {
   const [numberArray, setNumberArray] = useState([]);
   const [lotoRecord, setLotoRecord] = useState([]);
   const [playerInfo, setPlayerInfo] = useState([]);

   const playRules = {
      totalNumberPerGame: 99,
      selectNumberPerGame: 5,
   };

   useEffect(() => {
      setNumberArray((prev) => {
         for (let item = 1; item < playRules.totalNumberPerGame + 1; item++) {
            if (prev.some((i) => i === item)) return prev;
            prev.push(item);
         }
         return [...prev];
      });
   }, [playRules.totalNumberPerGame]);

   const randomNumber = (checkArray) => {
      const random =
         Math.floor(Math.random() * playRules.totalNumberPerGame) + 1;
      if (checkArray.some((number) => number === random))
         return randomNumber(checkArray);
      return random;
   };

   const handleGetNumber = () => {
      setLotoRecord((prev) => {
         prev.push(randomNumber(prev));
         return [...prev];
      });
   };

   const handleAddPlayer = (playerInfoFormData) => {
      setPlayerInfo([...playerInfo, playerInfoFormData]);
   };

   const numberCardDisabled =
      lotoRecord.length === playRules.totalNumberPerGame ? true : false;

   return (
      <Main>
         <Grid
            templateColumns='repeat(24, 1fr)'
            gap={{ base: 1, md: 6 }}
            mt='50px'
         >
            <GridItem colSpan={{ base: 24, md: 12 }} w='full'>
               <LotoBoard
                  handleGetNumber={handleGetNumber}
                  numberArray={numberArray}
                  lotoRecord={lotoRecord}
                  numberCardDisabled={numberCardDisabled}
               />
            </GridItem>
            <GridItem colSpan={{ base: 24, md: 12 }} w='full'>
               <MemberBoard
                  randomNumber={randomNumber}
                  playRules={playRules}
                  handleAddPlayer={handleAddPlayer}
                  playerInfo={playerInfo}
                  lotoRecord={lotoRecord}
               />
            </GridItem>
         </Grid>
      </Main>
   );
};

export default Loto;
