import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ZodError } from 'zod';

import { todoSchema } from '../components/TodoItem';
import { Todo } from '../components/TodoItem';

export default function useTodo(todoId: string) {
   const [todo, setTodo] = useState<Todo | undefined>();

   const toast = useToast();

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/' + todoId)
         .then((response) => response.json())
         .then((todo) => {
            const fetchedTodo = todoSchema.parse(todo);
            setTodo(fetchedTodo);
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
   }, [todoId]);
   return todo;
}
