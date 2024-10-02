import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useParams } from 'react-router-dom';

const VideoPlayer = () => {
    const [videoData,setVideoData] = useState({})

    const {id} = useParams()
    

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = date.getFullYear();
        
        return `${day}-${month}-${year}`;
      };
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjcxNTNmOWI3NzVkZDFkY2VhNWM4NjZlMzdiY2YzNyIsIm5iZiI6MTcyNzc1OTYxOS43MjY1NDIsInN1YiI6IjY2Zjk0YThjMGY2ZmEyY2ZjZTVmNmYwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h8eE7QVRkDejUclEeIEt8EZZNxce0K4zGWjBqRfHS5A'
        }
      };
      
      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => setVideoData(response.results[0]))
        .catch(err => console.error(err));
      },[])
   

    return (
        <div className='bg-black flex flex-col items-center h-screen w-screen relative'>
          <Link to="/home"><IoArrowBackCircleOutline color='white' size={60} className='absolute left-6 top-12 cursor-pointer'/></Link>
          <div className='flex-grow flex justify-center items-center w-full'>
            <ReactPlayer 
              className="react-player"
              url={`https://www.youtube.com/watch?v=${videoData.key}`} 
              controls={true}
              width='100%' 
              height='100%' 
            />
          </div>
          <div className='w-full p-4 bg-black text-white flex justify-between'>
            <p>{formatDate(videoData.published_at)}</p>
            <p>{videoData.name}</p>
            <p>{videoData.type}</p>
          </div>
        </div>
      )
}

export default VideoPlayer