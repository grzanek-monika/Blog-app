import PropTypes from "prop-types";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ReactQuill from 'react-quill';
import DatePicker from "react-datepicker";
import 'react-quill/dist/quill.snow.css';

import "react-datepicker/dist/react-datepicker.css";

const PostForm = ({action, actionText, ...props}) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
    const [shortDescription, setShortDescription] = useState(props.shortDescription ||'');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({title, author, publishedDate, shortDescription, content})
    }

    return(
        <>
            <Form className="p-10" onSubmit={handleSubmit}>
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
                    <Form.Control type="text" placeholder="Published" style={{width: '25%'}} selected={publishedDate} onChange={(date) => setPublishedDate(date)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Short description:</Form.Label>
                    <Form.Control as="textarea" placeholder="Leave a comment here" rows={3} style={{width: '75%'}} value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
                </Form.Group>
                <ReactQuill theme="snow" value={content} onChange={setContent}/>   
                <Button type="submit">{actionText}</Button>
            </Form>
        </>
    )
}

PostForm.propTypes = {
    action: PropTypes.func.isRequired,
    actionText: PropTypes.string.isRequired,
}
export default PostForm;