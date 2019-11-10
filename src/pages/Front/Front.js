import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRequest } from "services/api";
import Doacao from "./Doacao";
import {LegendasAndamento} from "./LegendasAndamento";
import {Container,Row,Column} from "components/Grid";
import Ranking from "./Ranking";
import Publicidade from "./Publicidade";

export default props => {
  const [messages, setMessages] = useState(JSON.parse(localStorage.getItem("messages")) || []);

  useEffect(() => {
    let isMount = true;
    async function getItens(){
      const res = await getRequest('messages/list');
      if(res.success && isMount){
        localStorage.setItem("messages", JSON.stringify(res.success));
        setMessages(res.success);
      }
    }
    getItens();
    return () => isMount = false
  },[]);

  const location = useLocation().pathname.replace('/','');
  return(
  
    <Container style={{paddingTop: '6.5rem'}}>
      {messages.map((item, index) => (
        <div key={index} className={`alert alert-${item.type}`}>
          {item.message}
        </div>
      ))}
      <Row>
        <Column mobile='12' tablet='12' desktop='8'> 
            {props.children}
            <Publicidade title="Publicidade" />
        </Column> 
        <Column mobile='12' tablet='12'desktop='4'> 
            <Doacao title="Doação" />
            <LegendasAndamento title="Próximas Legendas" />
            {location !== 'ranking' && <Ranking title="Ranking" />}
        </Column> 
       </Row> 
    </Container>
  )
};
