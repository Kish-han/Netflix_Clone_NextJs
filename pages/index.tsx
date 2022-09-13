import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Row from '../components/Row'
import useAuth from '../hooks/useAuth'
import { Movie } from '../typings'
import requests from '../utils/requests'

interface Props {
  netflixOriginals: Movie[],
  trendingNow: Movie[],
  topRated: Movie[],
  actionMovies: Movie[],
  comedyMovies: Movie[],
  horrorMovies: Movie[],
  romanceMovies: Movie[],
  documentaries: Movie[],
}

const Home = ({ netflixOriginals, trendingNow, topRated, actionMovies, comedyMovies, horrorMovies, romanceMovies, documentaries }: Props) => {
  const {loading} = useAuth()
  
  if(loading) return <h1>Loading...</h1>

  // console.log(netflixOriginals, trendingNow, topRated, actionMovies, comedyMovies, horrorMovies, romanceMovies, documentaries)

  return (
    <div className="relative bg-gradient-to-b from-gray-900/10 to-[#010511]">
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="data:image/png;base64,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" />
      </Head>
      {/* Header */}
      <nav>
        <Header />
      </nav>
      <main className='' >
        <Banner netflixOriginals = {netflixOriginals} />
        {/* Banner */}
        <section className='px-4 py-7 mt-4 md:mx-4'>
          <Row title="Trending Now" movies={trendingNow} isLargeRow />
          <Row title="Netflix Originals" movies={netflixOriginals} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Movies" movies={actionMovies} />
          <Row title="Comedy Movies" movies={comedyMovies} />
          <Row title="Horror Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {/* model */}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),

  ])
  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
      
    }
  }  
}