import React from "react";

import { Container } from "./styles";

const Modal = (props) => {

  const show = () => (
    <div id="overlay">
      <Container className="card card-shadow">
        <h5>{props.title}</h5>
        <div className="content">{props.content}</div>
        <div className="actions">
          <button onClick={props.onClose}>Fechar</button>
          { props.onConfirm && props.showConfirm && <button style={{marginLeft:'1rem'}} onClick={props.onConfirm}>Sim</button>}
        </div>
      </Container>
    </div>
  );

  return props.show && show();
};

export default Modal;
