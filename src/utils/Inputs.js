export const Inputs = {
    user: {
        labels: ["Nome", "E-mail", "Senha", "Tipo", "Imagem"],
        types: ["text", "email", "password", "select", "file"],
        names: ["name", "email", "password", "user_type", "image"]
    },
    subtitle: {
        labels: ["Nome","Categoria","Ano","Link de Download","Tipo","Temporada/Episódio(s01e02)","Imagem","Status","Autor"],
        types: ["text","select","number","text","checkbox","text","hidden","select","disabled"],
        names: ["name", "category", "year","url","type","episode", "image", "status", "author"]
    },
    category: {
        labels: ["Nome"],
        types: ["text"],
        names: ["name"]
    },
    progress: {
        labels: ["Nome", "Porcentagem", "Autor"],
        types: ["text", "number", "disabled"],
        names: ["name", "percent", "author"]
    },
    gallery: {
        labels: ["Nome", "Palavras chave", "Imagem"],
        types: ["text", "text", "file"],
        names: ["name", "tags", "image"]
    },
    message: {
        labels: ["Tipo", "Status", "Mensagem"],
        types: ["select", "select", "textarea"],
        names: ["type", "status", "message"]
    }
}
