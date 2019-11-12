import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function HeadHelmet (props) {
    const { useDefault, title, uri, description } = props;
    const host = "https://ducklegendas.com";
    if(useDefault){
        return (
            <Helmet>
                <title>Duck Legendas</title>
                <link rel="canonical" href={host+"/"} />
                <meta name="description" content="Baixar legendas de séries e filmes voltado para todos os públicos, fácil sistema de busca e divisão por categorias para você encontrar o que procura. Fansubs." />
                <meta name="keywords" content="legenda,série,filme,baixar,download,fácil,fansub,categorias,índice,contato,login,recuperar,senha,subtitle,ducklegendas,fansubs" />
                <meta name="robots" content="" />
                <meta name="revisit-after" content="1 day" />
                <meta name="language" content="Portuguese" />
                <meta name="generator" content="N/A" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            </Helmet>
        );
    }else{
        return (
            <Helmet>
                {title && <title>{`Duck Legendas - ${title}`}</title>}
                {uri && <link rel="canonical" href={`${host}${uri}`} />}
                {description && <meta name="description" content={description} />}
            </Helmet>
        );
    }
}