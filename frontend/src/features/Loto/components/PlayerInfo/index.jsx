// import PropTypes from 'prop-types';
import { Button, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const PlayerInfo = ({ player, lotoRecord }) => {
   const isActive = (selectedNumber) => {
      return lotoRecord.some((l) => l === selectedNumber);
   };

   return (
      <>
         <VStack>
            <Text>{player.name}</Text>
            <SimpleGrid columns={2} spacing={5}>
               {player.selectedNumbers.map((number) => (
                  <Button
                     key={number}
                     colorScheme={isActive(number) ? 'green' : 'gray'}
                     variant={isActive(number) ? 'solid' : 'outline'}
                  >
                     {number}
                  </Button>
               ))}
            </SimpleGrid>
         </VStack>
      </>
   );
};

PlayerInfo.propTypes = {};

export default PlayerInfo;
