import NavigatinBar from './../components/NavigationBar';
import { Row, Col, Container} from 'react-bootstrap';
import VideoEmbed from '../components/VideoEmbed';
import React from 'react'
import CommentSection from '../components/CommentSection';
import ProductEtalase from '../components/ProductsEtalase';


const VideoPlay = () => {

    return(
        <Container>
            <div>
                <NavigatinBar/>
            </div>
            <div>
                <Row>
                    <Col lg={3} md={2} style={{backgroundColor:'#dcdcdc '}}>
                        <Row  xs= {3} md={2} lg={2} >
                            <ProductEtalase />
                        </Row>
                    </Col>

                    <Col lg={6} md={1} style={{backgroundColor:'#ffffff'}}>
                        <VideoEmbed/>
                    </Col>

                    <Col lg={3} md={1} style={{backgroundColor:'#dcdcdc ', alignContent:'center'}}>
                        <CommentSection/>
                    </Col>
                </Row>
            </div>
        </Container>
        
    )
}

export default VideoPlay