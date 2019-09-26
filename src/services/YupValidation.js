import * as Yup from 'yup';

export const UserSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Nome com no mínimo 2 caracteres!')
        .max(50, 'Nome com no máximo 50 caracteres!!')
        .required('Nome é obrigatório!'),
    password: Yup.string()
        .min(6, 'Senha com no mínimo 6 caracteres!')
        .max(20, 'Senha com no máximo 20 caracteres!!')
        .required('Senha é obrigatório!'),
    email: Yup.string()
        .email('E-mail inválido!')
        .required('E-mail é obrigatório!'),
});