import { z } from 'zod'

export const homeSchema = z.object({
  id: z.number(),
  title: z.string().min(1, 'Nome obrigatório para adicionar ToDo'),
  status: z.boolean(),
})

export type HomeSchema = z.infer<typeof homeSchema>
