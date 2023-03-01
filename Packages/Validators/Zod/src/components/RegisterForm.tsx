import {
   Button,
   FormControl,
   FormErrorMessage,
   FormLabel,
   Stack,
   useToast,
} from '@chakra-ui/react';
import { FormEventHandler, useState } from 'react';
import { z } from 'zod';

/**
 * Schema for placed data validation
 */

export const formSchema = z.object({
   login: z.string().min(1, { message: 'login is required' }),
   email: z.string().email('Email not corrent'),
   password: z.string().min(1).max(5, 'too long'),
});

/**
 * @name RegisterForm
 * @description Form with input data validation, based on Zod
 * @constructor
 */

export const RegisterForm = () => {
   const toast = useToast();

   // Errors stats
   const [errors, setError] = useState<
      z.ZodFormattedError<{ login: string; email: string; password: string }, string>
   >({
      _errors: [],
   });

   // Submit handler
   const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
      event.preventDefault();

      const form = new FormData(event.currentTarget);
      const formData = Object.fromEntries(form.entries());
      const validation = formSchema.safeParse(formData);

      // Errors
      if (!validation.success) {
         const errors = validation.error.format();

         toast({
            title: 'An error occured',
            isClosable: true,
            status: 'error',
            duration: 5000,
         });

         setError(errors);
      } else {
         setError({
            _errors: [],
         });
      }
   };
   return (
      <form onSubmit={handleSubmit}>
         <Stack
            spacing="2"
            p={'3'}
            bg={'gray.200'}
            sx={{
               input: {
                  bg: 'white',
               },
            }}
         >
            <FormControl isInvalid={!!errors.login}>
               <FormLabel>Login</FormLabel>
               <input type="text" name="login" />
               {errors.login && (
                  <FormErrorMessage>{errors.login._errors.join(', ')}</FormErrorMessage>
               )}
            </FormControl>

            <FormControl isInvalid={!!errors.email}>
               <FormLabel>Email address</FormLabel>
               <input type="email" name="email" />
               {errors.email && (
                  <FormErrorMessage>{errors.email._errors.join(', ')}</FormErrorMessage>
               )}
            </FormControl>

            <FormControl isInvalid={!!errors.password}>
               <FormLabel>Password</FormLabel>
               <input type="password" name="password" />
               {errors.password && (
                  <FormErrorMessage>
                     {errors.password._errors.join(', ')}
                  </FormErrorMessage>
               )}
            </FormControl>

            <Button type="submit">Send</Button>
         </Stack>
      </form>
   );
};
