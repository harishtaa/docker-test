import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import {Button, Form} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'


function FormEditVideo() {
    const [judulVideo, setJudulVideo] = useState("")
    const [thumbnailUrl, setThumbnailUrl] = useState("")
    const [videoUrl, setVideoUrl] = useState("")
    const navigate = useNavigate()
    const {id} = useParams()


    useEffect(() => {
        getVideoById()
    }, [])
    
    const getVideoById = async() => {
        const data = await fetch(`http://localhost:5000/videos/${id}`)
        if (!data.ok) throw new Error ("Gagal Fetch")
        let results = await data.json()
        setJudulVideo(results.judulVideo)
        setThumbnailUrl(results.thumbnailUrl)
        setVideoUrl(results.videoUrl)
    }

    const updateVideo = async(e) => {
        e.preventDefault()
        try{
            await axios.patch(`http://localhost:5000/videos/${id}`, {
                judulVideo,
                thumbnailUrl,
                videoUrl
            });
            console.log({ judulVideo, thumbnailUrl, videoUrl });
            navigate('/')
        }catch(e){
            console.log('Error response:', e.response);
        }
    }

    return (
        <Container className='p-5'>
            <div className=' mb-2 text-center justify-content-center'>
                <h3>Edit Video</h3>
            </div>
            <div>
                <Form className='p-2' onSubmit={updateVideo}>

                    <Form.Group className="mb-3">
                        <Form.Label>Judul Video</Form.Label>
                        <Form.Control type="text" placeholder="Enter Judul Video" value={judulVideo} onChange={(e) => setJudulVideo(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Thumbnail URL</Form.Label>
                        <Form.Control type="text" value={thumbnailUrl} disabled/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Video URL</Form.Label>
                        <Form.Control type="text" placeholder="Enter Video URL" value={videoUrl} 
                            onChange={(e) => {
                                const url = e.target.value
                                const thumbUrl = `https://i.ytimg.com/vi/${url.slice(17)}/maxresdefault.jpg`
                                setVideoUrl(url)
                                setThumbnailUrl(thumbUrl)
                            }}/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </Form>
            </div>
        </Container>
        
    );


}

export default FormEditVideo;