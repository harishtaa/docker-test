import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


function FormAddVideo() {
    const [judulVideo, setJudulVideo] = useState("")
    const [thumbnailUrl, setThumbnailUrl] = useState("")
    const [videoUrl, setVideoUrl] = useState("")
    const navigate = useNavigate()

    const saveVideo = async(e) => {
        e.preventDefault()
        try{
            await axios.post('http://localhost:5000/videos', {
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
            <div className=' mb-5 text-center justify-content-center'>
                <h3>Insert Video</h3>
            </div>
            <div>
                <Form className='p-4' onSubmit={saveVideo}>

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
                        <Form.Control type="text" placeholder="https://youtu.be/xxxxxxxxxxx" value={videoUrl} 
                            onChange={(e) => {
                                const url = e.target.value
                                const thumbUrl = `https://i.ytimg.com/vi/${url.slice(17)}/maxresdefault.jpg`
                                setVideoUrl(url)
                                setThumbnailUrl(thumbUrl)
                            }}/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Insert
                    </Button>
                </Form>
            </div>
        </Container>
        
    );
}

export default FormAddVideo;