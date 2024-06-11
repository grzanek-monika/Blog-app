import { Container } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesReducer";
import { NavLink } from "react-router-dom";

const Categories = () => {
    const categories = useSelector(getAllCategories);
    return(
        <Container >
            <h2>All Categories: </h2>
            <ListGroup className="d-flex justify-content-center">
                {categories.map(postCategory => 
                    <ListGroup.Item action className="d-flex justify-content-center"
                        as={NavLink} 
                        to={`/categories/${postCategory}`} 
                        style={{width: '25%', margin: '0% 35%', color: 'blue'}}>
                            {postCategory}
                    </ListGroup.Item> 
                )}
            </ListGroup>
        </Container>
       
    )
}
export default Categories;