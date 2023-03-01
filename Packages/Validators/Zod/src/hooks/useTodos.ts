import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ZodError } from 'zod';

import { Todo, todoSchema } from '../components/TodoItem';

export default function useTodos() {
   const [todos, setTodos] = useState<Todo[]>([]);

   const toast = useToast();

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
         .then((response) => response.json())
         .then((result) => todoSchema.array().parseAsync(result))
         .then((todos) => {
            setTodos(todos);
         })
         .catch((e) => {
            if (e instanceof ZodError) {
               toast({
                  title: 'Error to fetch',
                  status: 'error',
                  duration: 9000,
                  isClosable: true,
               });
            }
            throw e;
         });
   }, []);

   return todos;
}
