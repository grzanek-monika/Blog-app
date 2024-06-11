import { useParams } from "react-router-dom";
import { getPostByCategory } from "../../../redux/postsReducer";
import { useSelector } from "react-redux";
import CardBody from "../../views/Card/CardBody.js";
import { Container } from "react-bootstrap";


const PostsOfCategory = () => {
    const {category} = useParams();
    const postsOfCategory = useSelector(state => getPostByCategory(state, category));
    console.log('post', postsOfCategory);

    if(postsOfCategory.length === 0) return( 
        <p>No posts in this category...</p>)
    else return(
        <Container >
            <h2>Category: <b>{category}</b></h2>
            <div className="d-flex justify-content-start flex-wrap">
                {postsOfCategory.map(postOfCategory => 
                    <CardBody 
                        key={postOfCategory.id} 
                        {...postOfCategory} 
                        style={{ width: '20rem'}} /> 
                    )
                }
            </div>
        </Container>
    )
}

export default PostsOfCategory;