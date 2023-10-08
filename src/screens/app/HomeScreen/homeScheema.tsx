import { z } from 'zod'

export const homeSchema = z.object({
  todo: z.string().min(1, 'Nome obrigatório para adicionar ToDo'),
})

export type HomeSchema = z.infer<typeof homeSchema>
