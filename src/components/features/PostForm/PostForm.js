import PropTypes from "prop-types";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ReactQuill from 'react-quill';
import DatePicker from "react-datepicker";
import 'react-quill/dist/quill.snow.css';
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { getAllCategories } from "../../../redux/categoriesReducer";
import { useSelector } from "react-redux";
import styles from './PostForm.module.scss';

const PostForm = ({action, actionText, ...props}) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [category, setCategory] = useState(props.category || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription ||'');
    const [content, setContent] = useState(props.content || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);

    const categories = useSelector(getAllCategories);

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const handleSubmit = e => {
        setContentError(!content);
        setDateError(!publishedDate);
        if(content && publishedDate) {
            action({title, author, publishedDate, category, shortDescription, content})
        }
    }

    return(
        <>
            <Form className="p-10" onSubmit={validate(handleSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control 
                        {...register("title", { required: true, minLength: 3 })}
                        type="text" 
                        placeholder="Enter title" 
                        style={{width: '25%'}}
                        value={title} 
                        onChange={e => setTitle(e.target.value)}/>
                    {errors.title && 
                        <small className="d-block form-text text-danger mt-2">
                            Title is too short (min is 3)
                        </small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAuthor" >
                    <Form.Label>Author:</Form.Label>
                    <Form.Control 
                        {...register("author", { required: true, minLength: 3 })}
                        type="text" 
                        placeholder="Enter author" 
                        style={{width: '25%'}} 
                        value={author} 
                        onChange={e => setAuthor(e.target.value)}/>
                    {errors.author && 
                        <small className="d-block form-text text-danger mt-2">
                            Author is too short (min is 3)
                        </small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPublished">
                    <Form.Label>Published:</Form.Label>
                    <p><DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)}/></p>
                    {dateError && 
                        <small className="d-block form-text text-danger mt-2">
                            This field can't be empty.
                        </small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCategory">
                    <Form.Label>Category:</Form.Label>
                    <Form.Select aria-label="Default select example" 
                        className="w-25"
                        value={category}
                        onChange={e => setCategory(e.target.value)} >
                        <option>Select category...</option>
                        {categories.map(postCategory => <option value={postCategory.category}>{postCategory.category}</option>)}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Short description:</Form.Label>
                    <Form.Control 
                        {...register("shortDescription", { required: true, minLength: 20 })}
                        as="textarea" 
                        placeholder="Leave a comment here" 
                        rows={3} 
                        className="w-75"
                        value={shortDescription} 
                        onChange={e => setShortDescription(e.target.value)} />
                    {errors.shortDescription && 
                        <small className="d-block form-text text-danger mt-2">
                            Description is too short (min is 20)
                        </small>
                    }
                </Form.Group>
                <ReactQuill className={styles.qlEditor} theme="snow" value={content} onChange={setContent}/>   
                {contentError && 
                        <small className="d-block form-text text-danger mt-2">
                            This field can't be empty.
                        </small>
                }
                <Button className="mt-5" type="submit">{actionText}</Button>
            </Form>
        </>
    )
}

PostForm.propTypes = {
    action: PropTypes.func.isRequired,
    actionText: PropTypes.string.isRequired,
    props: PropTypes.object.isRequired
}
export default PostForm;