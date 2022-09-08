import Image from 'next/image'
import React from 'react'
import { Movie } from '../typings'

interface Props {
    movie: Movie,
    isLargeRow?: boolean
}

const Thumbnail = ({ movie, isLargeRow }: Props) => {

    // console.log(movie.title)

    return (
        <div className=' transition duration-300 hover:scale-105 '>
            <div className={`relative ${isLargeRow ? "h-[300px] md:h-[400px]" : "h-28 md:h-36"} min-w-[180px] md:min-w-[260px]`}>
                <Image src={`https://image.tmdb.org/t/p/w500${isLargeRow ? movie?.poster_path : movie?.backdrop_path
                    }`} layout="fill" className='rounded-sm object-cover md:rounded cursor-pointer ' />
            </div>
            {/* <p className='flex items-center z-50' >{movie.name || movie.original_name || movie.title}</p> */}
        </div>
    )
}

export default Thumbnail