import { getPostById } from "../../../redux/postsReducer.js";
import { useSelector } from "react-redux";
import { useParams, Navigate, NavLink } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
import ModalPage from "../ModalPage/ModalPage.js";

const Post = () => {
    const {id} = useParams();
    const postData = useSelector(state => getPostById(state, id));
    if(!postData) return <Navigate to="/" />
    else return(
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
                <Button as={NavLink} to={`/post/edit/${id}`} variant="outline-primary">Edit</Button>{' '}
                <ModalPage id={postData.id} />
            </div>
        </Container>
    )
}

export default Post;