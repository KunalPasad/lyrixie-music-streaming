"use client"
import React from 'react'
import { Song } from '@/types';
import MediaItem from '@/components/MediaItem';
import LikedButton from '@/components/LikedButton';
interface searchContentProps{
    songs:Song[];
}
const SearchContent:React.FC<searchContentProps> = ({songs}) => {
    if(songs.length===0){
        return(
            <div className='flex flex-col gap-y-2 w-full px-6 text-neutral-400'>
                No Songs Found :(
            </div>
        )
    }
  return (
    <div className='flex flex-col gap-y-2 w-fill px-6'>
        {songs.map((song)=>(
            <div key={song.id}
            className='flex items-center gap-x-4 w-full'>
                <div className='flex-1'>
                    <MediaItem onClick={()=>{}} data={song}/>
                </div>
                {/* Add Like button here */}
                <LikedButton songId={song.id}/>
            </div>
        ))}

    </div>
  )
}

export default SearchContent