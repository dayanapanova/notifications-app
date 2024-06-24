import { z } from 'zod';

export const createArticleSchema = z.object({
  title: z.string().min(1),
  text: z.string().min(1),
});

export type CreateArticleInput = z.input<typeof createArticleSchema>;
