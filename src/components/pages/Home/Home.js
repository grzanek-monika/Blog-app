import { Button } from "react-bootstrap";
import Posts from "../../features/Posts/Posts.js";
import { NavLink } from "react-router-dom";

const Home = () => {
    return(
        <>
            <div className="d-flex justify-content-between " >
                <h2>All Posts:</h2>
                <Button as={NavLink} to={'/post/add'} variant="outline-primary" size='sm' style={{height: '35px'}}>
                    Add  Post
                </Button>
            </div>
            <Posts />
        </>
        
    )
}

export default Home;