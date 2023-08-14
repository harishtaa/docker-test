
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';


const VideoEmbed = () => {

    const {id} = useParams()
    const [embed, setEmbed] = useState('');
    useEffect(() => {
        getVideoById()
        
        
    }, [])

    const getVideoById = async() =>{
        const data = await fetch(`http://localhost:5000/videos/${id}`)
        if (!data.ok) throw new Error ("Gagal Fetch")
        let results = await data.json()

        const ytUrl = results.videoUrl;
        const urlId = ytUrl.slice(17)
        const embed = `https://www.youtube.com/embed/${urlId}?autoplay=1`
        setEmbed(embed)
    }
    return(
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe width="550px" height="300px" className="embed-responsive-item d-block mx-auto" src={embed} allowFullScreen="1" ></iframe>
            </div>
        </div>
    )
}

export default VideoEmbed