import { Button } from "react-bootstrap";

const Btn = props  => {
    return(
        <Button variant="primary">{props.children}</Button>
    )
}

export default Btn;