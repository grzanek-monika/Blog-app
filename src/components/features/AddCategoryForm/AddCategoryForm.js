import { Form, ListGroup, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../../redux/categoriesReducer";

const AddCategoryForm = () => {
    const [category, setCategory] = useState('');
    const dispatch = useDispatch();
    const add = e => {
        e.preventDefault();
        dispatch(addCategory(category));
        setCategory('');
    }
    return(
        <ListGroup.Item className="w-50">
            <Form 
                className="d-flex justify-content-center text-center text-primary align-items-center"
                onSubmit={add}>
                <Form.Control 
                type="text" 
                placeholder='New category...'
                className="border-0 text-center w-50 m-2 mt-0 mb-0"
                value={category}  
                onChange={e => setCategory(e.target.value)} />
                <Button type="submit" className="w-20 h-25">Add</Button>
            </Form>
        </ListGroup.Item>
    )
}

export default AddCategoryForm;