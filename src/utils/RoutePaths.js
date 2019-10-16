const dashboard = "/dashboard",
    users = `${dashboard}/users`,
    subtitles = `${dashboard}/subtitles`,
    categories = `${dashboard}/categories`,
    progress = `${dashboard}/progress`,
    gallery = `${dashboard}/gallery`,
    rankings = `${dashboard}/rankings`;

export const ROUTES = {
    HOME: '/',
    SERIES: '/series',
    FILMES: '/filmes',
    RANKING: '/ranking',
    INDICE: '/indice',
    CONTATO: '/contato',
    POST: '/post',
    LOGIN: '/painel',
    RESETPASSWORD: '/reset',
    DASHBOARD: {
        HOME: dashboard,
        USER: {
            LIST: users,
            FORM: `${users}/user`
        },
        SUBTITLE: {
            LIST: subtitles,
            FORM: `${subtitles}/subtitle`
        },
        CATEGORY: {
            LIST: categories,
            FORM: `${categories}/category`
        },
        PROGRESS: {
            LIST: progress,
            FORM: `${progress}/subtitle`
        },
        GALLERY: {
            LIST: gallery,
            FORM: `${gallery}/image`
        },
        RANKING: rankings
    }
}