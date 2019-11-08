import React from 'react';
import {
    Fab,
    List,
    CollapsibleList,
    SimpleListItem,
} from 'rmwc';
import { baseUrl } from "services/api";
import image_serie from "assets/img/sem_capa.jpg";
import { MainText } from './styles';
import '@material/list/dist/mdc.list.css';
import '@rmwc/list/collapsible-list.css';

function ListMobile (props) {
    const { entities, tableParams, setOpenModal, baseUri } = props;
    return(
        <List style={{ height: "100%", overflow: "scroll" }}>
        {entities.dataPaginada &&
              entities.dataPaginada.map((item, index) => (
        <CollapsibleList
          style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}
          key={index}
          handle={
            <SimpleListItem
              text={<MainText>{item.name || item.message}</MainText>}
              metaIcon="chevron_right"
            >
            {props.title !== "Ranking" && (
             <div style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
             <Fab
                style={{
                  marginRight: "5px",
                  backgroundColor: "var(--edit-button)",
                  boxShadow: "1px 3px 1px #9E9E9E"
                }}
                mini
                icon="create"
                type="button"
                onClick={() => {
                  props.history.replace({
                    pathname: `${tableParams.formPath}/${item.id}`,
                    state: {
                      item: item,
                      entities: entities
                    }
                  });
                }}
              />
              {props.title === "Legendas Pendentes" && 
                <Fab
                  style={{
                    marginRight: "5px",
                    backgroundColor: "#4CAF50",
                    boxShadow: "1px 3px 1px #9E9E9E"
                  }}
                  mini
                  icon="save"
                  type="button"
                  onClick={() => 
                    setOpenModal({
                      open: true,
                      id: item.id,
                      msg: `Id: ${item.id}  Nome: ${item.name}`,
                      item: item,
                      action: 'aprovar'
                    })
                  }
                />
              }
              <Fab
                style={{ 
                  backgroundColor: "var(--delete-button)",
                  boxShadow: "1px 3px 1px #9E9E9E" 
                }}
                mini
                icon={baseUri === 'progress'?"assignment_turned_in":"delete"}
                type="button"
                onClick={() =>
                  setOpenModal({
                    open: true,
                    id: item.id,
                    msg: `Id: ${item.id}  ${item.name?'Nome: '+item.name:'Mensagem: '+item.message}`,
                    action: 'excluir'
                  })
                }
              />
              </div>
            )}
            </SimpleListItem>
          }
        >
          {tableParams.headNames.map((objectKey, i) => (
            objectKey !== 'image'? typeof item[objectKey] === "object"
            ? <SimpleListItem key={i} secondaryText={`${tableParams.headCells[i]}: ${item[objectKey].name}`} />
            : <SimpleListItem key={i} secondaryText={`${tableParams.headCells[i]}: ${item[objectKey]}`} />
            : <img
                key={i} 
                style={{ maxHeight: '150px', paddingLeft: '2rem', paddingTop: '1rem' }} 
                src={`${baseUrl}${item[objectKey]}?${item['updated_at']}`} 
                onError={(e) => e.target.src = image_serie}
                alt=""
              />
          ))}
        </CollapsibleList>
        ))}
      </List>
    );
}

export default ListMobile;