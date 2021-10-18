import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required'
    }).min(2, 'Name at least must be 2 characters'),
    password: string({
      required_error: 'Password is required'
    }).min(6, 'Password at least must be 6 characters'),
    passwordConfirmation: string({
      required_error: 'Password is required'
    }).min(6, 'Password at least must be 6 characters'),
    email: string({
      required_error: 'Email is required'
    }).email('Please provide a valid email')
  }).refine(
    (data) => {
      return data.password == data.passwordConfirmation;
    },
    { message: 'Password is not match', path: ['passwordConfirmation'] }
  )
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;
