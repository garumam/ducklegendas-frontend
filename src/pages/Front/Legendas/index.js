import React, {useEffect, useReducer} from "react";
import { useLocation } from "react-router-dom";
import { getRequest } from "services/api";
import LegendasBody from "components/LegendasBody";
import HeadHelmet from "services/HeadHelmet";

const Legendas = (props) => {

  const location = useLocation();

  const [entities, setEntities] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      page: 1, // PÁGINA SELECIONADA NO COMPONENTE DE PAGINAÇÃO DO FRONT
      dataPaginada: [], // DADOS VINDOS DO BACK PAGINADOS DE 12 EM 12
      loading: true,
      search: "", // PESQUISA
      order: "todas", // ORDENAR
      lastPage: 1 // ÚLTIMA PÁGINA PARA BLOQUEAR BOTÃO PRÓXIMO
    }
  );

  let type = location.pathname.replace('/','');

  switch(type){
    case 'series':
      type = 'SERIE';
      break;
    case 'filmes':
      type = 'FILME';
      break;
    default:
      type = "";
  }

  useEffect(() => {
    let isSubscribed = true;
    async function getItens() {
      const res = await getRequest(
        `/subtitles/list?page=${entities.page}&search=${entities.search}&order=${entities.order}&type=${type}`
      );
      if(res.success && isSubscribed){
        setEntities({
          dataPaginada: res.success.data,
          lastPage: Math.ceil(res.success.total/12),
          loading: false
        });
      }
    }

    getItens();
    
    return () => isSubscribed = false
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[entities.page, entities.search, entities.order]);

  return(
    <>
    <HeadHelmet 
      title={type?props.title:null}
      uri={location.pathname}
      description={type?`${props.title} - legendas`:null}
    />
    <LegendasBody 
      title={props.title}
      entities={entities} 
      setEntities={setEntities} 
    />
    </>
  )
}

export default Legendas;