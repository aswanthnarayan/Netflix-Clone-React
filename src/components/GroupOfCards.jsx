import React from 'react'
import TitleCard from './TitleCard'

const GroupOfCards = () => {
  return (
    <div className='pl-[6%] flex flex-col gap-6 mt-4 mb-6'>
        <TitleCard title='Popular On Netflix' category='popular'/>
        <TitleCard title='Top Rated' category='top_rated'/>
        <TitleCard title='Now Playing' category='now_playing'/>
        <TitleCard title='UpComing' category='upcoming'/>
    </div>
  )
}

export default GroupOfCards