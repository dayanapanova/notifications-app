import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(4),
});

export type CreateUserInput = z.input<typeof createUserSchema>;
