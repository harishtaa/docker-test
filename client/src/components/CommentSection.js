
import { Card, Form, Button} from 'react-bootstrap';
import React, {useState, useEffect,useRef } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CommentSection = () => {
    const {id} = useParams()
    const [comments, setComments] = useState([])
    useEffect(() => {
        getCommentsById()
    }, [])

    const getCommentsById = async() =>{
        const data = await fetch(`http://localhost:5000/comments/${id}`)
        if (!data.ok) throw new Error ("Gagal Fetch")
        let results = await data.json()
        setComments(results)
    }

    const convertTimestamp = (timestamp) => {
        var newDate = new Date(timestamp);
        return new Date(newDate.getTime() + 7 * 60 * 60 * 1000).toUTCString();
    }

    const scrollComment = () => {
        const scrollContainer = commentSectionRef.current;
            const isScrolledToBottom = scrollContainer.scrollHeight - scrollContainer.scrollTop === scrollContainer.clientHeight;
            if (!isScrolledToBottom) {
                scrollContainer.scrollTop = scrollContainer.scrollHeight - scrollContainer.clientHeight;
            }
            commentSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const [username, setUsername] = useState("")
    const [comment, setComment] = useState("")
    const commentSectionRef = useRef(null);

    const saveComment = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/comments', {
                videoId: id,
                username,
                comment
            });
            getCommentsById();
            setUsername("");
            setComment("");
            scrollComment()
            
        } catch (e) {
            console.log('Error response:', e.response);
        }
    }

    return(
        <>  
            <h4>Comments</h4>
            <div style={{ height: '60vh', overflow: 'auto' }}>
            {
                
                comments.map((c,i) => 
                    
                    <div className='mt-2' key={i}>
                        <Card>
                            <div style={{height:'35px'}}>
                                <h6 style={{marginLeft:'10px', marginTop:'5px',height:'10px'}}>{c.username}</h6><span style={{marginLeft:'10px', fontSize:'1vw'}}>{convertTimestamp(c.timestamp)}</span>
                            </div>
                            <hr/>
                            <div>
                                <p style={{marginLeft:'10px'}}>{c.comment}</p>
                            </div>
                        </Card>
                        <div ref={commentSectionRef}></div>
                    </div>
                    
                )
                
            }
            
            </div>

            <div style={{height: '40vh', marginTop:'30px'}}>
                    <Form style={{ marginTop: 'auto', alignItems: 'end' }} onSubmit={saveComment}>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" value={username} required onChange={(e) => setUsername(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" type="text" placeholder="Enter Comment" value={comment} required onChange={(e) => setComment(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>

    )
}

export default CommentSection
