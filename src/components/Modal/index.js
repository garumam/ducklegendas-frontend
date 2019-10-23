import React,{useEffect,useRef} from "react";

import { Container } from "./styles";

const Modal = (props) => {
  const overlayClick = useRef();
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function handleClick(e){
    if(overlayClick.current === e.target){
      return props.onClose();
    }
    
  }
  const show = () => (
    <div ref={overlayClick} id="overlay">
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
