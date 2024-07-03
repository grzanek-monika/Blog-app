import { ListGroup, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { getPostByCategory } from "../../../redux/postsReducer";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

const CategoryItem = ({postCategory}) => {
    const posts = useSelector(state => getPostByCategory(state, postCategory.category));
   
    return(
        <ListGroup.Item 
            action 
            className="p-4 pt-2 pb-2 d-flex justify-content-between align-items-center text-center text-primary w-50 fs-5"
            key={postCategory.category}
            as={NavLink} 
            to={`/categories/${postCategory.category}`} >
                {postCategory.category}
            <Badge bg="primary">{posts.length}</Badge>
        </ListGroup.Item> 
    )
}

CategoryItem.propTypes = {
    postCategory: PropTypes.object.isRequired
}
export default CategoryItem;