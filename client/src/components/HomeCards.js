import { Container, Row, Col, Card, Button } from "react-bootstrap"
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

export function HomeCards() {
    const [videos, setVideo] = useState([])
    useEffect(() => {
        getVideos()
    }, [])

    const getVideos = async () => {
        const data = await fetch("http://localhost:5000/videos")
        if (!data.ok) throw new Error ("Gagal Fetch")
        let results = await data.json()
        setVideo(results)
    }

    return(
        <Container>
            <Row  xs= {1} md={2} lg={5}>
                {
                    videos.map(video=> 
                        <Col key = {video.videoId}>
                            <Link to ={`video/${video.videoId}`} >
                                <Card className="m-1 bg-light border-3" style={{textAlign:'center', height:'100%'}}>
                                    <Card.Img  variant="top" src={video.thumbnailUrl} />
                                    <Card.Body>
                                        <Card.Title style={{fontSize:'12px'}}>{video.judulVideo}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}