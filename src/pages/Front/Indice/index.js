import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getRequest } from "services/api";
import { ROUTES } from "utils/RoutePaths";
import { Indice, CategoryContainer } from "./styles";
import HeadHelmet from "services/HeadHelmet";
import { LoadingContainer } from "components/Generic";
import { CircularProgress } from "@rmwc/circular-progress";

export default props => {
  const [loading, setLoading] = useState(false);
  const [entities, setEntities] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    async function getItens() {
      const res = await getRequest("categories/list");
      if (res.success) {
        setEntities(res.success);
      }
      setLoading(false);
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
      <HeadHelmet
        title={props.title}
        uri={ROUTES.INDICE}
        description={`${props.title} - legendas`}
      />
      <div className="header-card">
        <h2>{props.title}</h2>
      </div>

      <div className="card-border" />
      {loading ? (
        <LoadingContainer style={{ height: "100px" }}>
          <CircularProgress style={{ color: "#00B6FF" }} size="xlarge" />
        </LoadingContainer>
      ) : (
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
      )}
    </Indice>
  );
};
