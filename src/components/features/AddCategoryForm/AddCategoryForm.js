import { Form, ListGroup, Button } from "react-bootstrap";

const AddCategoryForm = () => {
    return(
        <ListGroup.Item className="d-flex justify-content-center text-center text-primary w-50 align-items-center">
            <Form.Control 
            type="text" 
            placeholder='New category...'
            className="border-0 text-center w-50 m-2 mt-0 mb-0"  />
            <Button className="w-20 h-25">Add</Button>
        </ListGroup.Item>
    )
}

export default AddCategoryForm;