import React from 'react';
import { Helmet } from 'react-helmet-async';
import { baseUrl } from 'services/api';

export default function HeadHelmet (props) {
    const { useDefault, title, uri, description, robots, image } = props;
    const host = "https://ducklegendas.com";
    const descriptionDefault = "Download de legendas para suas séries e filmes favoritos, fácil sistema de busca e divisão por categorias para você encontrar o que procura.";

    if(useDefault){
        return (
            <Helmet>
                <title>Duck Legendas - Legendas de Séries e Filmes</title>
                <meta name="description" content={descriptionDefault} />
                <meta name="robots" content="" />

                {/* <!-- Open Graph / Facebook --> */}                
                <meta property="og:title" content="Duck Legendas - Legendas de Séries e Filmes" />
                <meta property="og:description" content={descriptionDefault} />
                <meta property="og:image" content={baseUrl+'img/facebookduck.jpg'} />

                {/* <!-- Twitter --> */}
                <meta property="twitter:title" content="Duck Legendas - Legendas de Séries e Filmes" />
                <meta property="twitter:description" content={descriptionDefault} />
                <meta property="twitter:image" content={baseUrl+'img/facebookduck.jpg'} />
            </Helmet>
        );
    }else{
        return (
            <Helmet>
                {title && <title>{`Duck Legendas - ${title}`}</title>}
                {uri && <link rel="canonical" href={`${host}${uri}`} />}
                {description && <meta name="description" content={description} />}
                {robots && <meta name="robots" content={robots} />}

                {/* <!-- Open Graph / Facebook --> */}                
                {title && <meta property="og:title" content={`Duck Legendas - ${title}`} />}
                {uri && <meta property="og:url" content={`${host}${uri}`} />}
                {description && <meta property="og:description" content={description} />}
                {image && <meta property="og:image" content={baseUrl+image} />}

                {/* <!-- Twitter --> */}
                {title && <meta property="twitter:title" content={`Duck Legendas - ${title}`} />}
                {uri && <meta property="twitter:url" content={`${host}${uri}`} />}
                {description && <meta property="twitter:description" content={description} />}
                {image && <meta property="twitter:image" content={baseUrl+image} />}
            </Helmet>
        );
    }
}