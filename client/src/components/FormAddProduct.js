import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function FormAddProduct() {
    const [videoId, setVideoId] = useState('');
    const [videoTitle, setVideoTitle] = useState('');
    const [productUrl, setProductUrl] = useState('');
    const [title, setTitle] = useState('');
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    const [price, setPrice] = useState('');
    const [videos, setVideos] = useState([]); // To store video data
    const navigate = useNavigate();

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const response = await axios.get('http://localhost:5000/videos');
            setVideos(response.data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    const saveProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/products', {
                videoId,
                productUrl,
                thumbnailUrl,
                title,
                price
            });
            console.log({ videoId, productUrl, thumbnailUrl, title, price });
        
            navigate('/products');
        } catch (e) {
            console.log('Error response:', e.response);
            console.log({ videoId, productUrl, thumbnailUrl, title, price });
        }
    };

    return (
        <Container className='p-5'>
            <div className=' mb-3 text-center justify-content-center'>
                <h3>Insert Product</h3>
            </div>
            <div>
                <Form className='p-4' onSubmit={saveProduct}>
                    <Form.Group className='mb-2'>
                        <Form.Label>Product for</Form.Label>
                        <Form.Control
                            as='select'
                            value={videoTitle}
                            onChange={(e) => {
                                setVideoTitle(e.target.value);
                                const selectedVideo = videos.find(video => video.judulVideo === e.target.value);
                                if (selectedVideo) {
                                    setVideoId(selectedVideo.videoId);
                                } else {
                                    setVideoId('');
                                }
                            }}
                        >
                            <option value=''>Select Video</option>
                            {videos.map(video => (
                                <option key={video.videoId} value={video.judulVideo}>
                                    {video.judulVideo}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Product URL</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product URL" value={productUrl} onChange={(e) => setProductUrl(e.target.value)}/>
                    </Form.Group>
                    
                    <Form.Group className="mb-2">
                        <Form.Label>Url Thumbnail</Form.Label>
                        <Form.Control type="text" placeholder="Enter Url Thumbnail" value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)}/>
                    </Form.Group>
                    
                    <Form.Group className="mb-2">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                    </Form.Group>

                    <Button variant='primary' type='submit'>
                        Insert
                    </Button>
                </Form>
            </div>
        </Container>
    );
}

export default FormAddProduct;