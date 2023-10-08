import { z } from 'zod'

export const signUpSchema = z.object({
  name: z.string().min(1, 'Nome obrigatório'),
  email: z.string().min(1, 'E-mail obrigatório').email('email inválido'),
  password: z.string().min(1, 'Senha obrigatória'),
})

export type SignUpSchema = z.infer<typeof signUpSchema>
