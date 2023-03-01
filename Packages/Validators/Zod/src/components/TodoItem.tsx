import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { ListIcon, ListItem, Text } from '@chakra-ui/react';
import { z } from 'zod';

/**
 * Schema for type validation for fetched data
 */
export const todoSchema = z.object({
   completed: z.boolean(),
   id: z.number(),
   title: z.string(),
   userId: z.number(),
});

/**
 * Generated type from schema
 */
export type Todo = z.infer<typeof todoSchema>;

/**
 * TodoItem
 * @param completed
 * @param id
 * @param title
 * @param userId
 * @constructor
 */
export const TodoItem = ({ completed, id, title, userId }: Todo) => {
   return (
      <ListItem data-id={id} data-user-id={userId}>
         <ListIcon as={completed ? CloseIcon : CheckIcon} color={'green.500'} />
         <Text ml={2} as={'span'}>
            {title}
         </Text>
      </ListItem>
   );
};
