import { Container } from '@chakra-ui/react';
import React from 'react';

const Main = ({ children }) => {
   return <Container maxW='1400px'>{children}</Container>;
};

export default Main;
