// import PropTypes from 'prop-types';
import { Button, Grid, GridItem, HStack, Text } from '@chakra-ui/react';
import React from 'react';

const PlayerInfo = ({ player, lotoRecord }) => {
   const isActive = (selectedNumber) => {
      const result = lotoRecord.some((l) => l === selectedNumber);
      return result;
   };

   return (
      <Grid templateColumns='repeat(24, 1fr)' gap='3' alignItems='center'>
         <GridItem colSpan={{ base: 24, md: 6 }}>
            <Text w='180px'>{player.name}: </Text>
         </GridItem>
         <GridItem colSpan={{ base: 24, md: 18 }}>
            <HStack spacing={2}>
               {player.selectedNumbers.map((number) => {
                  return (
                     <Button
                        key={number}
                        colorScheme={isActive(number) ? 'green' : 'gray'}
                        variant={isActive(number) ? 'solid' : 'outline'}
                     >
                        {number}
                     </Button>
                  );
               })}
            </HStack>
         </GridItem>
      </Grid>
   );
};

PlayerInfo.propTypes = {};

export default PlayerInfo;
