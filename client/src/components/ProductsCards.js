import { Container, Row, Col, Card, Button } from "react-bootstrap"
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from "axios"


export function ProductsCards() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const data = await fetch("http://localhost:5000/products");
        if (!data.ok) throw new Error("Failed to fetch products");
        const results = await data.json();
        setProducts(results);
    };
    

    const deleteProduct = async (videoId, productId) => {
        try {
            await axios.delete(`http://localhost:5000/products/${videoId}/${productId}`);
            getProducts();
        } catch (e) {
            console.log(e);
        }
    };

    // Group products by videoId
    const groupedProducts = products.reduce((groups, product) => {
        if (!groups[product.videoId]) {
            groups[product.videoId] = [];
        }
        groups[product.videoId].push(product);
        return groups;
    }, {});

    
    return (
        <Container className='mt-5'>
            {Object.keys(groupedProducts).map((videoId) => (
                <div key={videoId}>
                    <h4>Products for Video ID: {videoId}</h4>
                    <Row xs={1} md={2} lg={5}>
                        {groupedProducts[videoId].map((product) => (
                            <Col key={product.productId} className="mb-2">
                                <Card className ="m-1 p-1 bg-light border-3" style={{ textAlign:'center',height:'100%'}}>
                                    <Card.Img variant="top" src={product.thumbnailUrl} />
                                    <Card.Body style={{height:'50px'}}>
                                        <Card.Title style={{fontSize:'10px'}}> {product.title}</Card.Title>
                                        <Card.Title style={{fontSize:'10px'}}> Rp{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</Card.Title>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Link to ={`editProduct/${product.videoId}/${product.productId}`}><Button size="sm" style={{marginRight:'5px'}} variant="outline-primary" type="submit">Edit</Button></Link>
                                        <Button onClick={() => deleteProduct(product.videoId, product.productId)}size="sm" variant="outline-danger" type="submit">Delete</Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            ))}
        </Container>
    );
}