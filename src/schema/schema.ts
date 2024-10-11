import { z } from "zod"

export const schema = z.object({
    name: z.string().min(1, 'O campo de nome é obrigatório'),
    email: z.string().min(1, 'O campo de e-mail é obrigatório').email('E-mail inválido'),
    fone: z.string().min(1, 'O campo de telefone é obrigatório').regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido'),
    position: z.string().min(1, 'O campo de cargo pretendido é obrigatório'),
    linkendin: z.string(),
    github: z.string(),
})

export type UserRegister = z.infer<typeof schema>