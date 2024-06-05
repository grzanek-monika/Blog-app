import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsReducer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const add = e => {
        e.preventDefault();
        dispatch(addPost({title, author, publishedDate, shortDescription, content}));
        navigate('/');
    }
    return(
        <Form className="p-10" onSubmit={add}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" placeholder="Enter title" style={{width: '25%'}} value={title} onChange={e => setTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAuthor" >
                <Form.Label>Author:</Form.Label>
                <Form.Control type="text" placeholder="Enter author" style={{width: '25%'}} value={author} onChange={e => setAuthor(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPublished">
                <Form.Label>Published:</Form.Label>
                <Form.Control type="text" placeholder="Published" style={{width: '25%'}} value={publishedDate} onChange={e => setPublishedDate(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Short description:</Form.Label>
                <Form.Control as="textarea" placeholder="Leave a comment here" rows={3} style={{width: '75%'}} value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicContent">
                <Form.Label>Main content:</Form.Label>
                <Form.Control as="textarea" placeholder="Leave a main content here" rows={8} style={{width: '75%'}} value={content} onChange={e => setContent(e.target.value)}/>
            </Form.Group>    
            <Button type="submit">Add</Button>
        </Form>
    )
}

export default AddPostForm;