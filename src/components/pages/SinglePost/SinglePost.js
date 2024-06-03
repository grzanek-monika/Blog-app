import { getPostById } from "../../../redux/postsReducer.js";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";

const SinglePost = () => {
    const {postId} = useParams();
    const postData = useSelector(state => getPostById(state, postId));
    return(
        <Container className="d-flex justify-content-around">
            <Card style={{border: 'white'}} >
                <h2>{postData.title}</h2>
                <Card.Body>
                    <Card.Text>
                        <p><b>Author: </b>{postData.author}</p>
                        <p><b>Published: </b>{postData.publishedDate}</p>
                        <p>{postData.content}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <div>
                <Button variant="outline-primary">Edit</Button>{' '}
                <Button variant="outline-danger">Delete</Button>
            </div>
        </Container>
    )
}

export default SinglePost;