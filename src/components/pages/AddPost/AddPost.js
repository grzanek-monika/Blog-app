import AddPostForm from "../../features/AddPostForm/AddPostForm";
import { Container } from "react-bootstrap";

const AddPost = () => {
    return(
        <Container>
            <h2>AddPost</h2>
            <AddPostForm />
        </Container>
    )
}

export default AddPost;