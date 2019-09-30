import React from "react";

import { Container } from "./styles";

const Modal = props => {
  const onClose = e => {
    props.onClose && props.onClose(e);
  };

  const show = () => (
    <div id="overlay" onClick={onClose}>
      <Container className="card card-shadow">
        <h5>{props.title}</h5>
        <div className="content">{props.children}</div>
        <div className="actions">
          <button onClick={onClose}>Fechar</button>
        </div>
      </Container>
    </div>
  );

  return props.show ? show() : null;
};

export default Modal;
