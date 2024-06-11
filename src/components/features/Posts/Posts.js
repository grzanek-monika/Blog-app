import { getAllPosts } from "../../../redux/postsReducer";
import { useSelector } from "react-redux";
import { Container} from "react-bootstrap";

import CardBody from "../../views/Card/CardBody.js";

const Posts = () => {
    const posts = useSelector(getAllPosts);

    return(
        <Container className="d-flex flex-wrap">
            {posts.map(post => <CardBody key={post.id} {...post} style={{ width: '20rem' }} />)}
        </Container>
    )
}

export default Posts;