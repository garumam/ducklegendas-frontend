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
    image: Yup.mixed() //value.size em bytes 1000000 bytes = 1000 kb
        .test('fileType', "Formato de imagem não suportado", value => {
            if(value instanceof File){
                return ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type);
            }
            return true;
        })
        .test('fileDimension', "Resolução da imagem muito grande, limite 640x640!",async value => {
            if(value instanceof File){
                function detectDimension(URL, callback) {
                    const image = new Image();
                    image.src = URL;
                    image.onload = function() {
                      const result = this.width <= 640 && this.height <= 640;
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
        }),
});