import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getRequest } from "services/api";
import { ROUTES } from "utils/RoutePaths";
import { Indice, CategoryContainer } from "./styles";

export default props => {
  const [entities, setEntities] = useState([]);
  const history = useHistory();
  useEffect(() => {
    async function getItens() {
      const res = await getRequest("categories/list");
      if (res.success) {
        setEntities(res.success);
      }
    }
    getItens();
  }, []);

  const handleClick = category => {
    history.push({
      pathname: ROUTES.LEGENDASINDICE,
      category: category
    });
  };

  return (
    <Indice className="card card-shadow">
      <div className="header-card">
        <h2>{props.title}</h2>
      </div>

      <div className="card-border" />
      <CategoryContainer>
        {entities.map((item, index) => (
          <span
            key={index}
            onClick={e => {
              e.preventDefault();
              handleClick(item);
            }}
          >
            • {item.name}
          </span>
        ))}
      </CategoryContainer>
    </Indice>
  );
};
