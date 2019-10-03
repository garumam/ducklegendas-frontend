import React from "react";

import { Container } from "./styles";

const Modal = (props) => {

  const show = () => (
    <div id="overlay" onClick={props.onClose}>
      <Container className="card card-shadow">
        <h5>{props.title}</h5>
        <div className="content">{props.content}</div>
        <div className="actions">
          <button onClick={props.onClose}>Fechar</button>
        </div>
      </Container>
    </div>
  );

  return props.show ? show() : null;
};

export default Modal;
