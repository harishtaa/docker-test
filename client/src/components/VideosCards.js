import { Container, Row, Col, Card, Button } from "react-bootstrap"
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from "axios"


export function VideosCards(){
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

    const deleteUser = async (videoId) => {
        try{
            await axios.delete(`http://localhost:5000/videos/${videoId}`)
            getVideos()
        } catch(e){
            console.log(e)
        }
    }

    return(
        <Container className='mt-5'>
            <Row xs= {1} md={2} lg={5} >
                {
                    videos.map(video=> 
                        <Col key={video.videoId} className="mb-2">
                            
                                <Card className ="m-1 p-1 bg-light border-3" style={{ textAlign:'center',height:'100%'}}>
                                    <Card.Img variant="top" src={video.thumbnailUrl} />
                                    <Card.Body style={{height:'50px'}}>
                                        <Card.Title style={{fontSize:'10px'}}> {video.judulVideo}</Card.Title>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Link to ={`editVideo/${video.videoId}`}><Button size="sm" style={{marginRight:'5px'}} variant="outline-primary" type="submit">Edit</Button></Link>
                                        <Button onClick={() => deleteUser(video.videoId)}size="sm" variant="outline-danger" type="submit">Delete</Button>
                                    </Card.Footer>
                                </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}
