import {
   Button,
   FormControl,
   FormLabel,
   HStack,
   Input,
   Modal,
   ModalBody,
   ModalCloseButton,
   ModalContent,
   ModalFooter,
   ModalHeader,
   ModalOverlay,
   Tag,
   TagCloseButton,
   TagLabel,
   Text,
   VStack,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const AddNewPlayerModal = ({
   isOpen,
   onClose,
   randomNumber,
   playRules,
   handleAddPlayer,
}) => {
   const [number, setNumber] = useState(0);
   const [formData, setFormData] = useState({
      name: '',
      selectedNumbers: [],
   });

   const onInputChange = (key, value) => {
      if (key === 'name') {
         return setFormData({ ...formData, name: value });
      }

      setFormData({
         ...formData,
         selectedNumbers: [...formData.selectedNumbers, parseInt(number)],
      });
      return setNumber(0);
   };

   const onClickRandomNumber = () => {
      let tempArrayNumber = [];
      for (let item = 0; item < playRules.selectNumberPerGame; item++) {
         tempArrayNumber.push(randomNumber(tempArrayNumber));
      }

      setFormData((prev) => {
         prev.selectedNumbers.length = 0;
         return {
            ...prev,
            selectedNumbers: tempArrayNumber,
         };
      });
   };

   const onClickRemoveNumberInSelectedNumber = (number) => {
      setFormData((prev) => {
         return {
            ...prev,
            selectedNumbers: prev.selectedNumbers.filter((n) => n !== number),
         };
      });
   };

   const onClickAddPlayer = () => {
      handleAddPlayer(formData);
      setFormData({
         name: '',
         selectedNumbers: [],
      });
   };

   const isAddNumberDisable =
      formData.selectedNumbers.length >= 5 ? true : false;

   return (
      <Modal isOpen={isOpen} onClose={onClose}>
         <ModalOverlay />
         <ModalContent>
            <ModalHeader>Add new Player</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               <VStack spacing={4}>
                  <FormControl>
                     <FormLabel htmlFor='name'>Name</FormLabel>
                     <Input
                        id='name'
                        type='text'
                        placeholder='Enter your name'
                        onChange={(e) => onInputChange('name', e.target.value)}
                        value={formData.name}
                     />
                  </FormControl>
                  <FormControl>
                     <FormLabel htmlFor='number'>Number</FormLabel>
                     <HStack spacing={2} w='full'>
                        <Input
                           id='number'
                           placeholder='Enter your number'
                           type='number'
                           onChange={(e) => setNumber(e.target.value)}
                           value={number}
                        />

                        {/* <Button
                           variant='outline'
                           colorScheme='blue'
                           onClick={() => onInputChange('number', number)}
                           disabled={isAddNumberDisable}
                        >
                           Add
                        </Button> */}

                        <Button
                           variant='outline'
                           colorScheme='red'
                           onClick={() => onClickRandomNumber()}
                        >
                           Random
                        </Button>
                     </HStack>
                  </FormControl>
                  <Text textAlign='left' w='full'>
                     Selected Number:
                  </Text>
                  <HStack
                     w='full'
                     spacing={2}
                     justifyItems='start'
                     flexWrap='wrap'
                  >
                     {formData.selectedNumbers?.map((number, index) => (
                        <Tag fontWeight='bold' key={index} colorScheme='green'>
                           <TagLabel>{number}</TagLabel>
                           <TagCloseButton
                              onClick={() =>
                                 onClickRemoveNumberInSelectedNumber(number)
                              }
                           />
                        </Tag>
                     ))}
                  </HStack>
               </VStack>
            </ModalBody>

            <ModalFooter>
               <Button
                  colorScheme='blue'
                  mr={3}
                  onClick={onClickAddPlayer}
                  disabled={!isAddNumberDisable || formData.name === ''}
               >
                  Add
               </Button>
               <Button variant='ghost' onClick={onClose}>
                  Cancel
               </Button>
            </ModalFooter>
         </ModalContent>
      </Modal>
   );
};

AddNewPlayerModal.propTypes = {
   isOpen: PropTypes.bool,
   onClose: PropTypes.func,
};

export default AddNewPlayerModal;
