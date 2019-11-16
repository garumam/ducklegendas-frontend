import * as Yup from 'yup';

const imageValidation = (w, h) => {
    return Yup.mixed() //value.size em bytes 1000000 bytes = 1000 kb
    .test('filelimit', "O limite são 1000 arquivos!", value => {
        if(value instanceof FileList){
            return value.length <= 1000;
        }
        return true;
    })
    .test('fileType', "Formato de imagem não suportado", value => {
        if(value instanceof FileList){
            let can = true;
            for (let i = 0; i < value.length; i++) {
                can = ['image/jpg', 'image/jpeg', 'image/png'].includes(value[i].type);
                if(!can)
                    break;
            }
            return can;
        }else{
            if(value instanceof File){
                return ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type);
            }
        }
        return true;
    })
    .test('fileDimension', `Resolução da imagem muito grande, limite ${w}x${h}!`,async value => {
        if(value instanceof File && 
            ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)
        ){
            function detectDimension(URL, callback) {
                const image = new Image();
                image.src = URL;
                image.onload = function() {
                  const result = this.width <= w && this.height <= h;
                  callback(result);
                };
            }
            const detectPromisse = new Promise(function(resolve, reject) {
                detectDimension(URL.createObjectURL(value), (result) => resolve(result))
            }); 
            const canReturn = [];
            await detectPromisse.then(result=>canReturn.push(result));
            return canReturn[0];
        }
        return true;
    })
    .test('fileSize', "O arquivo é muito pesado, peso limite é 1000kb", value => {
        if(value instanceof File){
            return value.size <= 1000000;
        }
        return true;
    })
}

export const UserSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Nome com no mínimo 2 caracteres!')
        .max(50, 'Nome com no máximo 50 caracteres!!')
        .required('Nome é obrigatório!'),
    password: Yup.string()
        .min(6, 'Senha com no mínimo 6 caracteres!')
        .max(20, 'Senha com no máximo 20 caracteres!!'),
    email: Yup.string()
        .email('E-mail inválido!')
        .required('E-mail é obrigatório!'),
    user_type: Yup.string()
                  .test('exist', "Tipo de usuário não válido!", (value) => {
                      if(value){
                        return ["admin", "moderador", "autor", "legender"].includes(value);
                      }
                      return true;
                  }),    
    image: imageValidation(640, 640),
});

export const SubtitleSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, 'Nome com no mínimo 1 caracteres!')
        .max(50, 'Nome com no máximo 50 caracteres!!')
        .required('Nome é obrigatório!'),
    year: Yup.number()
        .integer('Ano precisa ser um número inteiro!')
        .min(1900, 'Ano deve ser no mínimo 1900!')
        .max(9999, 'Ano com no máximo 9999!')
        .required('Ano é obrigatório!'),
    category: Yup.number()
        .integer('Esta categoria não é válida!')
        .required('Categoria é obrigatório!'),
    url: Yup.string()
        .url('Url inválida!')
        .required('Url é obrigatória!'),
    image: Yup.string(),
    status: Yup.mixed()
        .oneOf(['APROVADA', 'PENDENTE'],'O status deve ser: APROVADA ou PENDENTE'),
    note: Yup.string()
        .max(1500, 'Observações com no máximo 1500 caracteres!!'),
});

export const ProgressSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, 'Nome com no mínimo 1 caracteres!')
        .max(50, 'Nome com no máximo 50 caracteres!!')
        .required('Nome é obrigatório!'),
    percent: Yup.number()
        .integer('Porcentagem precisa ser um número inteiro!')
        .min(0, 'Porcentagem deve ser no mínimo 0%!')
        .max(100, 'Porcentagem deve ser no máximo 100%!')
        .required('Porcentagem é obrigatório!'),
    status: Yup.mixed()
        .oneOf(['EM ANDAMENTO', 'CONCLUÍDA'],'O status deve ser: EM ANDAMENTO ou CONCLUÍDA'),
    author: Yup.number()
        .integer('O autor não é válido, atualize a página!'),
});

export const CategorySchema = Yup.object().shape({
    name: Yup.string()
        .min(1, 'Nome com no mínimo 1 caracteres!')
        .max(50, 'Nome com no máximo 50 caracteres!!')
        .required('Nome é obrigatório!'),
});

export const GallerySchema = Yup.object().shape({
    name: Yup.string()
        .min(1, 'Nome com no mínimo 1 caracteres!')
        .max(50, 'Nome com no máximo 50 caracteres!!'),
    tags: Yup.string()
        .min(1, 'Palavras chave com no mínimo 1 caracteres!')
        .max(191, 'Palavras chave com no máximo 191 caracteres!!'),
    image: imageValidation(650, 700),
});

export const MessageSchema = Yup.object().shape({
    message: Yup.string()
        .min(1, 'Mensagem com no mínimo 1 caracter!')
        .max(200, 'Mensagem com no máximo 200 caracteres!!')
        .required('Mensagem é obrigatória!'),
    type: Yup.mixed()
        .oneOf(['primary','success', 'danger','warning'],'O tipo deve ser primary,success,danger,warning'),
    status: Yup.mixed()
        .oneOf(['ON', 'OFF'],'O status deve ser: ON ou OFF')
});