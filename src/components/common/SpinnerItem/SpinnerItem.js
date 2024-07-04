import { Spinner } from "react-bootstrap";

const SpinnerItem = () => {
    return(
        <div className="p-5 d-flex justify-content-center">
            <Spinner animation="border" variant="primary" />
        </div>
    )
}

export default SpinnerItem;