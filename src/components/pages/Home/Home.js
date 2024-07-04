import { Container, Button } from "react-bootstrap";
import Posts from "../../features/Posts/Posts.js";
import { NavLink } from "react-router-dom";
import { getPending } from "../../../redux/pendingReducer.js";
import { useSelector } from "react-redux";
import SpinnerItem from "../../common/SpinnerItem/SpinnerItem.js";

const Home = () => {
    const pending = useSelector(getPending);
    return(
        <Container>
            <div className="d-flex justify-content-between " >
                <h2>All Posts:</h2>
                <Button as={NavLink} to={'/post/add'} variant="outline-primary" size='sm' style={{height: '35px'}}>
                    Add  Post
                </Button>
            </div>
            {pending && <SpinnerItem />}
            {!pending && <Posts />}
        </Container>
        
    )
}

export default Home;