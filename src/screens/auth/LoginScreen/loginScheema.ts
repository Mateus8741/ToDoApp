import { z } from 'zod'

export const loginSchema = z.object({
  // name: z.string().min(1, 'Nome obrigatório'),
  email: z.string().email('email inválido'),
  password: z.string().min(1, 'Senha obrigatória'),
})

export type LoginSchema = z.infer<typeof loginSchema>
