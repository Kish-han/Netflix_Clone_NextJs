import { FastForwardIcon, InformationCircleIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'
import { FaPlay } from 'react-icons/fa'

interface Props {
    netflixOriginals: Movie[],
}

const Banner = ({ netflixOriginals }: Props) => {

    const [movie, setMovie] = React.useState<Movie | null>(null)

    const truncate = (str: string, n: number) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    useEffect(() => {
        setMovie
            (
                netflixOriginals[Math.floor(Math.random() * netflixOriginals.length - 1)]
            )
    }, [netflixOriginals])

    // console.log(movie)

    return (
        <>
            <div className='relative h-[80vh]'>
                <Image src={`${baseUrl}${movie?.backdrop_path}`} layout="fill" objectFit='cover' objectPosition="center" />
                <div className="absolute top-56 left-5 md:top-64 max-w-2xl">
                    <h1 className='text-2xl font-bold md:text-3xl lg:text-6xl mb-2' >{movie?.title || movie?.name || movie?.original_name}</h1>
                    <p className='max-w-xs text-shadow-xl text-xs md:max-w-lg lg:max-w-2xl lg:text-xl' >{truncate(`${movie?.overview}`, 130)}</p>
                    <div className="flex space-x-4 mt-4">
                        <button className="bannerButton bg-white text-black"><FaPlay className='h-4 w-4 text-black md:h-6 md:w-6' /> Play</button>
                        <button className="bannerButton bg-[gray]/70"> More Info<InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8'/></button>
                    </div>
                </div>
                <div className="h-[9rem] bg-gradient-to-b from-transparent via-[black]/80 to-[#141414] absolute bottom-0 left-0 right-0"></div>
            </div>
        </>
    )
}

export default Banner