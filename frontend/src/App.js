import Loto from './features/Loto/pages/LotoPage';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
   return (
      <ChakraProvider>
         <Loto />
      </ChakraProvider>
   );
}

export default App;
