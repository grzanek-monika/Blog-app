import { Container, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllCategories, } from "../../../redux/categoriesReducer";
import { NavLink } from "react-router-dom";
import AddCategoryForm from "../../features/AddCategoryForm/AddCategoryForm";

const Categories = () => {
   
    const categories = useSelector(getAllCategories);
    return(
        <Container >
            <h2>All Categories: </h2>
            <ListGroup 
            className="mt-2 mb-5 p-5 d-flex justify-content-center">
                {categories.map(postCategory => 
                <ListGroup.Item 
                    action 
                    className="d-flex justify-content-center text-center text-primary w-50"
                    key={postCategory.category}
                    as={NavLink} 
                    to={`/categories/${postCategory.category}`} >
                        {postCategory.category}
                </ListGroup.Item> 
                )}
                <AddCategoryForm />
            </ListGroup>
        </Container>
       
    )
}
export default Categories;