import React, {useEffect, useReducer} from "react";
import { useLocation, Redirect } from "react-router-dom";
import { getRequest } from "services/api";
import { ROUTES } from "utils/RoutePaths";
import LegendasBody from "components/LegendasBody";
import HeadHelmet from "services/HeadHelmet";

const LegendasIndice = () => {

  const location = useLocation();
  const hasCategory = location.category || false;

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
  useEffect(() => {
    let isSubscribed = true;
    async function getItens() {
      const res = await getRequest(
        `/subtitles/list?page=${entities.page}&search=${entities.search}&order=${entities.order}&category=${hasCategory.id}`
      );
      if(res.success && isSubscribed){
        setEntities({
          dataPaginada: res.success.data,
          lastPage: Math.ceil(res.success.total/12),
          loading: false
        });
      }
    }

    if(hasCategory) getItens();
    
    return () => isSubscribed = false
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[entities.page, entities.search, entities.order]);

  return(
    !hasCategory ?
    <Redirect to={ROUTES.INDICE} />
    :
    <>
    <HeadHelmet 
      title={hasCategory.name}
      uri={ROUTES.INDICE}
      description={`${hasCategory.name} - legendas`}
    />
    <LegendasBody 
      title={hasCategory.name}
      entities={entities} 
      setEntities={setEntities}
    />
    </>
  )
}

export default LegendasIndice;