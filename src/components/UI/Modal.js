import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
/*Modalın arkaplanı için Backdrop componenti oluşturuldu*/
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};
/*Modalın contenti için ModalOverlay componenti oluşturuldu*/
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

/*modal componentini portal ile render edildi*/
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
