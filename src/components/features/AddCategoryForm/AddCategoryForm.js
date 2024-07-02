import { Form, ListGroup, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategoryRequest } from "../../../redux/categoriesReducer";

const AddCategoryForm = () => {
    const [category, setCategory] = useState('');
    const dispatch = useDispatch();
    const add = e => {
        e.preventDefault();
        dispatch(addCategoryRequest({category}));
        setCategory('');
    }
    return(
        <ListGroup.Item className="w-50">
            <Form 
                className="d-flex justify-content-between text-primary align-items-center"
                onSubmit={add}>
                <Form.Control 
                type="text" 
                placeholder='New category...'
                className="border-0 w-50 "
                value={category}  
                onChange={e => setCategory(e.target.value)} />
                <Button type="submit" size="sm">Add</Button>
            </Form>
        </ListGroup.Item>
    )
}

export default AddCategoryForm;