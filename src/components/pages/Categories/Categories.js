import { Container, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllCategories, } from "../../../redux/categoriesReducer";
import AddCategoryForm from "../../features/AddCategoryForm/AddCategoryForm";
import CategoryItem from "../../views/CategoryItem/CategoryItem";

const Categories = () => {
   
    const categories = useSelector(getAllCategories);
    
    return(
        <Container >
            <h2>All Categories: </h2>
            <ListGroup 
                className="mt-2 mb-5 p-5 d-flex justify-content-center">
                {categories.map(postCategory => <CategoryItem postCategory={postCategory} />)}
                <AddCategoryForm />
            </ListGroup>
        </Container>
       
    )
}
export default Categories;