import { Button, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';
import NumberCard from '../NumberCard';

const LotoBoard = ({
   handleGetNumber,
   numberArray,
   lotoRecord,
   numberCardDisabled,
}) => {
   const onClickGetNumber = () => {
      handleGetNumber();
   };

   return (
      <VStack w='full' spacing={7}>
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
         <Button
            w='full'
            colorScheme='blue'
            h='60px'
            onClick={onClickGetNumber}
            disabled={numberCardDisabled}
         >
            Get Number
         </Button>
      </VStack>
   );
};

export default LotoBoard;
