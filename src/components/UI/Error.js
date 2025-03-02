import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'

import Card from './Card'
import Button from './Button'

import './Error.css'

const BackDrop = () => {
    return (
        <div className="backdrop" />
    )
} 

const ModalOverLay = (props) => {
    return (
        <Card className="modal">
        <header className="header">
            <h2>{props.title}</h2>
        </header>
        <div className="content">
            <p>{props.message}</p>
        </div>
        <footer className="footer">
            <Button onClick = {props.onConfirm}>OK</Button>
        </footer>
        </Card>
    )
} 

const Error = (props) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <BackDrop />,
                document.getElementById('backdrop-root') // renderdatakse 'backdrop-root' konteinerisse
            )}
            {ReactDOM.createPortal(
                <ModalOverLay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById('overlay-root') // renderdatakse 'overlay-root' konteinerisse
            )}
        </Fragment>
    )
} 

export default Error