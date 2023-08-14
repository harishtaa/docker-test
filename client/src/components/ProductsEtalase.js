import { Card, Form, Button} from 'react-bootstrap';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';


const ProductEtalase = () => {
    const {id} = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async() =>{
        const data = await fetch(`http://localhost:5000/products/video/${id}`)
        if (!data.ok) throw new Error ("Gagal Fetch")
        let results = await data.json()
        setProducts(results)
    }

    return(
            products.map((p,i) => 
                <div className='mt-2' key={i}>
                    <Card style={{ fontSize: '12px', width: '100%' }}>
                        <Card.Img variant="top" src={p.thumbnailUrl} alt={p.title} />
                        <Card.Body className="d-flex flex-column">
                            <div style={{ flex: '1' }}>
                                <Card.Title className="mt-2 mb-2" style={{ fontSize: '14px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                    {p.title}
                                </Card.Title>
                                <Card.Text style={{ height: '30px', fontSize: '12px' }}>Rp{p.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</Card.Text>
                            </div>
                            <div className="d-flex justify-content-end">
                                <a href={p.productUrl} target="_blank">
                                    <Button variant="primary" size="sm">Buy Now</Button>
                                </a>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            )
        
    )

}

export default ProductEtalase