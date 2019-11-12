import React from 'react';
import { Helmet } from 'react-helmet';

export default function HeadHelmet (props) {
    const { useDefault, title, uri, description } = props;
    const host = "https://ducklegendas.com";
    if(useDefault){
        return (
            <Helmet>
                <meta charSet="utf-8" />
                <title>Duck Legendas</title>
                <link rel="canonical" href={host+"/"} />
                <meta name="description" content="Legendas" />
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