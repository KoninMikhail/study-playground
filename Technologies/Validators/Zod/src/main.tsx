import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
   <React.StrictMode>
      <ChakraProvider>
         <App />
      </ChakraProvider>
   </React.StrictMode>,
);
