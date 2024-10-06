import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";


const TitleCard = ({ title, category, medium }) => {
  const apiToken = import.meta.env.VITE_TMDB_TOKEN;
  const navigate = useNavigate();
  const cardsRef = useRef();
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${apiToken}`,
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${medium}/${category}?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  const handleVideoClick = (id) => {
    navigate(`/video/${id}`, { replace: true });
  };

  return (
    <div className="w-full">
      <h2 className="mb-[3px] md:mb-[8px] text-xl font-bold">
        {title ? title : "Popular on Netflix"}
      </h2>
      <div
        className="card-list flex gap-2 md:gap-4 overflow-x-auto "
        ref={cardsRef}
      >
        {data?.map((card, index) => {
          return (
            <div
              onClick={() => handleVideoClick(card.id)}
              key={index}
              className="card flex-shrink-0 w-[180px] md:w-[230px] relative"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt="card"
                className="rounded-[4px] w-full relative  "
              />
              <p className="mt-2 text-center absolute bottom-0 right-0 px-2 z-1 text-white bg-base-bg2">
                {card.original_title || card.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
