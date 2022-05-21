import {
   Button,
   HStack,
   SimpleGrid,
   useDisclosure,
   VStack,
} from '@chakra-ui/react';
import React from 'react';
import AddNewPlayerModal from '../AddNewPlayerModal';
import PlayerInfo from '../PlayerInfo';

const MemberBoard = ({
   randomNumber,
   playRules,
   handleAddPlayer,
   playerInfo,
   lotoRecord,
   handleResetPlayer,
}) => {
   const { isOpen, onOpen, onClose } = useDisclosure();

   const onClickResetPlayer = () => {
      handleResetPlayer();
   };

   return (
      <VStack w='full' spacing={6}>
         <HStack w='full' spacing={3}>
            <Button onClick={onOpen} colorScheme='blue'>
               Add player
            </Button>
            <Button onClick={onClickResetPlayer}>Reset player</Button>
         </HStack>

         <SimpleGrid columns={1} spacing={5} w='full'>
            {playerInfo?.map((player) => (
               <PlayerInfo
                  player={player}
                  key={player.id}
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
