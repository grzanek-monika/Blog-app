import PostForm from "../PostForm/PostForm.js";
import { useDispatch } from "react-redux";
import { addPostRequest } from "../../../redux/postsReducer";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
   

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const add = post => {
        dispatch(addPostRequest(post));
        navigate('/');
    }
    return(
        <>
            <PostForm action={add} actionText='Add' />
        </>
    )
}

export default AddPostForm;