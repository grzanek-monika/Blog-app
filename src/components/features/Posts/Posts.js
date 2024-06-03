import { getAllPosts } from "../../../redux/postsReducer";
import { useSelector } from "react-redux";
import { Card, Container, Button} from "react-bootstrap";

const Posts = () => {
    const posts = useSelector(getAllPosts);

    return(
        <Container className="d-flex justify-content-between flex-wrap">
            {posts.map(post => <Card key={post.id} to={`/post/:id`} style={{ width: '20rem' }} >
                <Card.Body>
                    <Card.Title><h3>{post.title}</h3></Card.Title>
                    <Card.Text><b>Author: </b>{post.author}</Card.Text>
                    <Card.Text><b>Published: </b>{post.publishedDate}</Card.Text>
                    <Card.Text>{post.shortDescription}</Card.Text>
                    <Button variant="primary">Read more</Button>
                </Card.Body>
            </Card>)}
        </Container>
    )
}

export default Posts;