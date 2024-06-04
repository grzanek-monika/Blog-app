import { Form } from "react-bootstrap";

const AddPostForm = () => {
    return(
        <Form>
            <Form.Group>
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" placeholder="Title" style={{width: '25%'}}/>
            </Form.Group>
        </Form>
    )
}

export default AddPostForm;