import React, { useEffect, useState } from "react";
import playIcon from "../assets/play_icon.png";
import infoIcon from "../assets/info_icon.png";
import TitleCard from "./TitleCard";
import { useNavigate } from "react-router-dom";

const MainCard = () => {
  const apiToken = import.meta.env.VITE_TMDB_TOKEN;
  const [datas, setData] = useState([]);
  const [card, setCard] = useState(null);

  const navigate = useNavigate();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
       `Bearer ${apiToken}`
,},
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);
     //random card selection
        setCard(
          response.results[Math.floor(Math.random() * response.results.length)]
        );
      })
      .catch((err) => console.error(err));
  }, []);

  const handleVideoClick = (id) => {
    navigate(`/video/${id}`, { replace: true });
  };

  return (
    <div className="h-screen object-cover relative">
      <div className="absolute inset-0 bg-[#00000028] bg-no-repeat bg-cover brightness-50 z-0"></div>

      <img
        src={
          card ? `https://image.tmdb.org/t/p/original${card.backdrop_path}` : ""
        }
        alt="main-img"
        className="w-full h-full object-cover relative"
      />
      <div className="absolute bottom-2 w-full pl-[6%]">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-3 lg:mb-[30px]">
          {card ? card.original_title : ""}
        </h1>
        <p className="max-w-[700px] text-[#ffffffe8] text-sm md:text-[1.1rem] mb-1 md:mb-3 lg:mb-[20px]">
          {card ? card.overview : ""}
        </p>
        <div className="flex gap-2 mb-2 lg:mb-6">
          <button
            onClick={() => handleVideoClick(card ? card.id : "")}
            className="bg-white text-black h-8 p-4 inline-flex items-center gap-2 rounded-[5px] hover:bg-[#ffffffbf]"
          >
            <img
              src={playIcon}
              alt="btn-play"
              className="w-[15px] lg:w-[25px]"
            />
            Play
          </button>
          <button className="bg-[#6d6d6eb3] text-white h-8 p-4 inline-flex items-center gap-2 rounded-[5px] hover:bg-[#6d6d6`e66]">
            <img src={infoIcon} alt="btn-info" className="w-[25px]" />
            Info
          </button>
        </div>
        <TitleCard
          title="Popular On Netflix"
          medium="movie"
          category="now_playing"
        />
      </div>
    </div>
  );
};

export default MainCard;
