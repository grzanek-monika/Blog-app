import { Container, ListGroup, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllCategories, fetchCategories} from "../../../redux/categoriesReducer";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import AddCategoryForm from "../../features/AddCategoryForm/AddCategoryForm";

const Categories = () => {
    const dispatch= useDispatch();
    useEffect(() => dispatch(fetchCategories()), [dispatch]);
    const categories = useSelector(getAllCategories);
    return(
        <Container >
            <h2>All Categories: </h2>
            <ListGroup 
            className="mt-2 mb-5 p-5 d-flex justify-content-center">
                {categories.map(postCategory => 
                <ListGroup.Item action className="d-flex justify-content-center text-center text-primary w-50"
                    as={NavLink} 
                    to={`/categories/${postCategory}`} >
                        {postCategory}
                </ListGroup.Item> 
                )}
                <AddCategoryForm />
            </ListGroup>
        </Container>
       
    )
}
export default Categories;