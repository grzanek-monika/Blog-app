import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

const ModalPage = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <Button variant="outline-danger" onClick={handleShow}>
            Delete
        </Button>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                This operation will completely remove this post from the app.  
                Are you sure you want to do that?
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="primary">Remove</Button>
            </Modal.Footer>
        </Modal>
        
        </>
    )
}

export default ModalPage;