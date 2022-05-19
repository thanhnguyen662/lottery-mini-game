import { Button, SimpleGrid, useDisclosure, VStack } from '@chakra-ui/react';
import React from 'react';
import AddNewPlayerModal from '../AddNewPlayerModal';
import PlayerInfo from '../PlayerInfo';

const MemberBoard = ({
   randomNumber,
   playRules,
   handleAddPlayer,
   playerInfo,
   lotoRecord,
}) => {
   const { isOpen, onOpen, onClose } = useDisclosure();

   return (
      <VStack w='full' spacing='5'>
         <Button onClick={onOpen}>Add member</Button>

         <SimpleGrid columns={3} spacing={5} w='full'>
            {playerInfo?.map((player, index) => (
               <PlayerInfo
                  player={player}
                  key={index}
                  lotoRecord={lotoRecord}
               />
            ))}
         </SimpleGrid>

         <AddNewPlayerModal
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            randomNumber={randomNumber}
            playRules={playRules}
            handleAddPlayer={handleAddPlayer}
         />
      </VStack>
   );
};

export default MemberBoard;
