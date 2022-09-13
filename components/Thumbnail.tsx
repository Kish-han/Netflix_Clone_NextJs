import { DocumentData } from 'firebase/firestore'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom.'
import { Movie } from '../typings'

interface Props {
  movie: Movie | DocumentData,
  isLargeRow?: boolean
}

function Thumbnail({ movie, isLargeRow }: Props) {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)

  return (
    <div className=' transition duration-300 hover:scale-105 '
      onClick={() => {
        setShowModal(true)
        setCurrentMovie(movie)
      }}
    >
      <div className={`relative ${isLargeRow ? "h-[200px] w-[150px] md:h-[300px] md:w-[200px] " : "h-28 md:h-36 min-w-[180px] md:min-w-[260px]"}`}>
        <Image src={`https://image.tmdb.org/t/p/w500${isLargeRow ? movie?.poster_path : movie?.backdrop_path
          }`} layout="fill" className='rounded-sm object-fill md:rounded cursor-pointer ' />
      </div>
    </div>
  )
}

export default Thumbnail
