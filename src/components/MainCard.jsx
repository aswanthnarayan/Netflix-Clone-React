import React from "react";
import mainCard from "../assets/hero_banner.jpg";
import mainCardTitle from "../assets/hero_title.png";
import playIcon from "../assets/play_icon.png";
import infoIcon from "../assets/info_icon.png";
import TitleCard from "./TitleCard";

const MainCard = () => {
  return (
    <div className="h-screen object-cover relative">
      <img src={mainCard} alt="main-img" className="w-full h-full" />
      <div className="absolute bottom-2 w-full pl-[6%]">
        <img src={mainCardTitle} alt="title" className="w-[70%] md:w-[80%] lg:w-[90%] max-w-[420px] mb-1 md:mb-3 lg:mb-[30px]" />
        <p className="max-w-[700px] text-sm md:text-[1.1rem] mb-1 md:mb-3 lg:mb-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
          laboriosam, velit delectus porro natus vero. Saepe quis perferendis
          accusamus esse!
        </p>
        <div className="flex gap-2 mb-2 lg:mb-6">
          <button className="bg-white text-black h-8 p-4 inline-flex items-center gap-2 rounded-[5px] hover:bg-[#ffffffbf]">
            <img src={playIcon} alt="btn-play" className="w-[15px] lg:w-[25px]" />Play
          </button>
          <button className="bg-[#6d6d6eb3] text-white h-8 p-4 inline-flex items-center gap-2 rounded-[5px] hover:bg-[#6d6d6`e66]">
            <img src={infoIcon} alt="btn-info" className="w-[25px]" />Info
          </button>
        </div>
      <TitleCard title='Popular On Netflix' category='now_playing'/>
      </div>

    </div>
  );
};

export default MainCard;
