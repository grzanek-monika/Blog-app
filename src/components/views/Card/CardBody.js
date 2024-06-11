import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { dateToStr } from "../../../utils/dateToString";
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';

const CardBody = (props) => {
    return(

    <Card key={props.id} to={`/post/:id`} style={{ width: '20rem', margin: '2%' }} >
        <Card.Body>
            <Card.Title><h3>{props.title}</h3></Card.Title>
            <Card.Text><b>Author: </b>{props.author}</Card.Text>
            <Card.Text><b>Published: </b>{dateToStr(props.publishedDate)}</Card.Text>
            <Card.Text><b>Category: </b>{props.category}</Card.Text>
            <Card.Text>{props.shortDescription}</Card.Text>
            <Button as={NavLink} to={`/post/${props.id}`} variant="primary">Read more</Button>
        </Card.Body>
    </Card>

    )
}

CardBody.propTypes = {
    props: PropTypes.object.isRequired,
}

export default CardBody;