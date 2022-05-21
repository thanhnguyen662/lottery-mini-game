import { Button, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';
import NumberCard from '../NumberCard';

const LotoBoard = ({
   handleGetNumber,
   numberArray,
   lotoRecord,
   numberCardDisabled,
   handleResetNumberBoard,
}) => {
   const onClickGetNumber = () => {
      handleGetNumber();
   };

   const onClickReset = () => {
      handleResetNumberBoard();
   };

   return (
      <VStack w='full' spacing={3}>
         <SimpleGrid columns={10} spacing={1} w='full'>
            {numberArray.map((number) => (
               <NumberCard
                  number={number}
                  key={number}
                  active={lotoRecord.some((i) => i === number) ? true : false}
                  lastRecord={lotoRecord[lotoRecord.length - 1] === number}
               />
            ))}
         </SimpleGrid>
         <HStack w='full'>
            <Button
               w='full'
               colorScheme='blue'
               h='60px'
               onClick={onClickGetNumber}
               disabled={numberCardDisabled}
               flex='1.8'
            >
               Get Number
            </Button>
            <Button h='60px' onClick={onClickReset} flex='1'>
               Reset Number
            </Button>
         </HStack>
      </VStack>
   );
};

export default LotoBoard;
