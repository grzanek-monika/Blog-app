import PostForm from "../PostForm/PostForm.js";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostById } from "../../../redux/postsReducer.js";
import { editPost } from "../../../redux/postsReducer.js";

const EditPostForm = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const postToEdit = useSelector(state => getPostById(state, id));
    const edit = postToEdit => {
        dispatch(editPost({...postToEdit, id}));
        navigate('/');
    }

    if(!id) return navigate('/');
    return(
        <PostForm action={edit} actionText='Save' title={postToEdit.title} author={postToEdit.author} 
            publishedDate={postToEdit.publishedDate} shortDescription={postToEdit.shortDescription} content={postToEdit.content} />
    )
}

export default EditPostForm;