import { Container, List, Spinner } from '@chakra-ui/react';
import React from 'react';

import { RegisterForm } from './components/RegisterForm';
import { TodoItem } from './components/TodoItem';
import useTodos from './hooks/useTodos';

function App() {
   const todos = useTodos();
   return (
      <Container minW={500} maxW={'full'} mx={'auto'}>
         <RegisterForm />
         {todos.length > 0 ? (
            <List spacing="3" align-ites="flex-start">
               {todos.map((todo) => (
                  <TodoItem key={todo.id} {...todo} />
               ))}
            </List>
         ) : (
            <Spinner color="red.500" />
         )}
      </Container>
   );
}

export default App;
