import { Container } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesReducer";
import { NavLink } from "react-router-dom";

const Categories = () => {
    const categories = useSelector(getAllCategories);
    return(
        <Container className="justify-content-center">
            <h2>All Categories: </h2>
            <ListGroup >
                {categories.map(postCategory => 
                    <ListGroup.Item 
                    as={NavLink} 
                    to={`/categories/${postCategory}`} 
                    style={{width: '25%', margin: '1% 30%', color: 'blue'}}>
                        {postCategory}
                    </ListGroup.Item> 
                )}
            </ListGroup>
        </Container>
       
    )
}
export default Categories;