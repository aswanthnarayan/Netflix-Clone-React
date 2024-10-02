import React, { useEffect, useRef, useState } from 'react';
import cardsData from '../assets/cards/Cards_data';
import '../App.css'
import { Link } from 'react-router-dom';

const TitleCard = ({title,category}) => {
    const cardsRef = useRef()
    const [data,setData] = useState([])

    console.log(data);
    

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjcxNTNmOWI3NzVkZDFkY2VhNWM4NjZlMzdiY2YzNyIsIm5iZiI6MTcyNzc1OTYxOS43MjY1NDIsInN1YiI6IjY2Zjk0YThjMGY2ZmEyY2ZjZTVmNmYwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h8eE7QVRkDejUclEeIEt8EZZNxce0K4zGWjBqRfHS5A'
      }
    };

const handleWheel = (e)=>{
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY
}

    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setData(response.results))
      .catch(err => console.error(err));

        cardsRef.current.addEventListener('wheel',handleWheel)
    },[])

    
  return (
    <div className='w-full'>
      <h2 className='mb-[3px] md:mb-[8px] text-xl font-bold'>{title?title:"Popular on Netflix"}</h2>
      <div className='card-list flex gap-2 md:gap-4 overflow-x-auto ' ref={cardsRef}> 
        {data.map((card, index) => {
          return (
            <Link to={`/video/${card.id}`} key={index} className='card flex-shrink-0 w-[180px] md:w-[230px] relative'>
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt="card"
                className='rounded-[4px] w-full  '
              />
              <p className='mt-2 text-center absolute bottom-0 right-1'>{card.original_title
              }</p> 
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
