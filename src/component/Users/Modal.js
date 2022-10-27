import React from "react";
import  ReactDOM  from "react-dom";
import Card from "../Ui/Card";
import './Modal.css'
import Button from "../Ui/Button";

const Backdrop = (props) =>{
    return <div className="backdrop" onClick={props.onConfirm}/>;
    }
const ModalError = (props) => {
    return (
        <Card className="modal" >
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="actions">
                <button type="submit" className="buttonerror"  onClick ={props.onConfirm}>okay</button>
                {/*Button not working */}
            </footer>
        </Card>
    )
}
const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop 
                onConfirm={props.onConfirm} />,
                document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<ModalError
                title={props.title}
                message={props.message}
                onConfirm={props.onConfirm} />,
                document.getElementById("overlay-root"))}
        </React.Fragment>
    )
}
export default Modal;