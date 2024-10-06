import React from "react";
import TitleCard from "./TitleCard";

const GroupOfCards = () => {
  return (
    <div className="pl-[6%] flex flex-col gap-6 mt-4 mb-6">
      <TitleCard title="Popular Movies" medium="movie" category="popular" />
      <TitleCard
        title="Most Watched Series"
        medium="tv"
        category="on_the_air"
      />
      <TitleCard title="Top Rated Movies" medium="movie" category="top_rated" />
      <TitleCard title="Now Playing" medium="movie" category="now_playing" />
      <TitleCard title="UpComing Movies" medium="movie" category="upcoming" />
      <TitleCard title="Popular Series" medium="tv" category="popular" />
      <TitleCard title="New Series" medium="tv" category="airing_today" />
      <TitleCard title="Top Rated Series" medium="tv" category="top_rated" />
    </div>
  );
};

export default GroupOfCards;
