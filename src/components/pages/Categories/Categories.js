import { Container } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesReducer";

const Categories = () => {
    const categories = useSelector(getAllCategories);
    return(
        <Container>
            <h2>All Categories: </h2>
            <ListGroup>

            </ListGroup>
        </Container>
       
    )
}
export default Categories;