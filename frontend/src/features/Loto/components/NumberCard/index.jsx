import { AspectRatio, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

const NumberCard = ({ number, active, lastRecord }) => {
   const isNumberCardBackground = () => {
      if (lastRecord) return 'red.500';
      if (active) return 'blue.500';
      return 'gray.300';
   };

   return (
      <AspectRatio
         ratio={1}
         bg={isNumberCardBackground()}
         rounded='xl'
         color='#fff'
      >
         <Box>{number}</Box>
      </AspectRatio>
   );
};

NumberCard.propTypes = {
   number: PropTypes.number.isRequired,
   active: PropTypes.bool,
};

NumberCard.defaultProps = {
   active: false,
};

export default NumberCard;
