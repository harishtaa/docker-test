import { Container, Button } from "react-bootstrap"
import NavigatinBar from "../components/NavigationBar"
import { Link } from "react-router-dom"
import { VideosCards } from "../components/VideosCards"
const Videos = () => {
    return(
        <Container>
            <NavigatinBar/>
            <div>
                <Link to='/addVideo'>
                    <Button variant="primary" type="submit">Insert Video</Button>
                </Link>
            </div>
            <div>
                
                <VideosCards/>
            </div>
        </Container>
    )
}

export default Videos