import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} ></div>
};

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}></div>
        </div>
};

const PortalElememt = document.getElementById('overlays');
const Modal = (props) => {

    return <Fragment>
        {ReactDOM.createPortal(<Backdrop />, PortalElememt)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, 
        PortalElememt
        )}
    </Fragment>
};
export default Modal;