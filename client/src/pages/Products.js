import { Container, Button } from "react-bootstrap"
import NavigatinBar from "../components/NavigationBar"
import { Link } from "react-router-dom"
import { ProductsCards } from "../components/ProductsCards"


const Products = () => {
    return(
        <Container>
            <NavigatinBar/>
            <div>
                <Link to='/addProduct'>
                    <Button variant="primary" type="submit">Insert Product</Button>
                </Link>
            </div>
            <div>
                
                <ProductsCards/>
            </div>
        </Container>
    )
}

export default Products