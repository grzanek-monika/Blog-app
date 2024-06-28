import { getPostById } from "../../../redux/postsReducer.js";
import { useSelector } from "react-redux";
import { useParams, Navigate, NavLink } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
import ModalPage from "../ModalPage/ModalPage.js";
import { dateToStr } from "../../../utils/dateToString.js";
import { useDispatch } from "react-redux";
import { removePostRequest } from "../../../redux/postsReducer";

const Post = () => {
    const {id} = useParams();
    const postData = useSelector(state => getPostById(state, id));

    const dispatch = useDispatch();
    const remove = e => {
        e.preventDefault();
        dispatch(removePostRequest(postData.id));
    }
    if(!postData) return <Navigate to="/" />
    else return(
        <Container className="d-flex justify-content-around">
            <Card style={{border: 'white'}} >
                <h2>{postData.title}</h2>
                <Card.Body>
                    <Card.Text>
                        <p><b>Author: </b>{postData.author}</p>
                        <p><b>Published: </b>{dateToStr(postData.publishedDate)}</p>
                        <p><b>Category: </b>{postData.category}</p>
                        <p dangerouslySetInnerHTML={{ __html: postData.content }} />
                    </Card.Text>
                </Card.Body>
            </Card>
            <div>
                <Button as={NavLink} to={`/post/edit/${id}`} variant="outline-primary">Edit</Button>{' '}
                <ModalPage action={remove} />
            </div>
        </Container>
    )
}
export default Post;