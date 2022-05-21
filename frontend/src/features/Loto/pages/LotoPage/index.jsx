import { Grid, GridItem } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Main from '../../../../layouts/Main';
import LotoBoard from '../../components/LotoBoard';
import MemberBoard from '../../components/MemberBoard';

const Loto = () => {
   const [numberArray, setNumberArray] = useState([]);
   const [lotoRecord, setLotoRecord] = useState([]);
   const [playerInfo, setPlayerInfo] = useState([]);
   const [rank, setRank] = useState([]);

   const playRules = {
      totalNumberPerGame: 20,
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
      const number = randomNumber(lotoRecord);
      setLotoRecord((prev) => {
         prev.push(number);
         return [...prev];
      });
   };

   const handleAddPlayer = (playerInfoFormData) => {
      setPlayerInfo([...playerInfo, playerInfoFormData]);
   };

   const handleResetPlayer = () => {
      setPlayerInfo((prev) => {
         prev.length = 0;
         return [...prev];
      });
   };

   const handleResetNumberBoard = () => {
      setLotoRecord((prev) => {
         prev.length = 0;
         return [...prev];
      });
   };

   const numberCardDisabled =
      lotoRecord.length === playRules.totalNumberPerGame ? true : false;

   return (
      <Main>
         <Grid
            templateColumns='repeat(24, 1fr)'
            gap={{ base: 3, md: 6 }}
            my='50px'
         >
            <GridItem colSpan={{ base: 24, md: 12 }} w='full'>
               <LotoBoard
                  handleGetNumber={handleGetNumber}
                  numberArray={numberArray}
                  lotoRecord={lotoRecord}
                  numberCardDisabled={numberCardDisabled}
                  handleResetNumberBoard={handleResetNumberBoard}
               />
            </GridItem>
            <GridItem colSpan={{ base: 24, md: 12 }} w='full'>
               <MemberBoard
                  randomNumber={randomNumber}
                  playRules={playRules}
                  handleAddPlayer={handleAddPlayer}
                  playerInfo={playerInfo}
                  lotoRecord={lotoRecord}
                  handleResetPlayer={handleResetPlayer}
               />
            </GridItem>
         </Grid>
      </Main>
   );
};

export default Loto;
