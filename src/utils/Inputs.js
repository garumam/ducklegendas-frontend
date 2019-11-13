export const Inputs = {
    user: {
        labels: ["Nome", "E-mail", "Senha", "Tipo", "Imagem"],
        types: ["text", "email", "password", "select", "file"],
        names: ["name", "email", "password", "user_type", "image"]
    },
    subtitle: {
        labels: ["Nome","Categoria","Ano","Link de Download","Tipo","Temporada/Episódio(s01e02)","Status","Imagem","Observações"],
        types: ["text","select","number","text","checkbox","text","select","hidden","textarea"],
        names: ["name", "category", "year","url","type","episode", "status", "image","note"]
    },
    category: {
        labels: ["Nome"],
        types: ["text"],
        names: ["name"]
    },
    progress: {
        labels: ["Nome", "Porcentagem"],
        types: ["text", "number"],
        names: ["name", "percent"]
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
