// import React from 'react'
import { useState } from 'react'
import Loginhome from "../components/Loginhome"
import Head from 'next/head'

const Login = () => {

  const [isSignin, setIsSignin] = useState(false)

  return (
    <section>
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="data:image/png;base64,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" />
      </Head>
      {
        !isSignin ? (
          <>
            <div className="relative w-screen h-screen bg-gradient-to-b from-black via-transparent to-black">
              <img src="https://assets.nflxext.com/ffe/siteui/vlv3/701eec50-4b87-4dc0-9d00-b0f54025dc36/028e62d2-2a59-4fc3-adaa-a0756a0512b9/IN-en-20220905-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" className="w-full h-full object-cover opacity-60" />
              <div className="md:px-4 md:py-2 py-6 px-4 z-50 absolute h-full top-0 right-0 left-0">
                <div className="flex justify-between items-center">
                  <div className="w-32 md:w-48">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
                  </div>
                  <button className="bg-[#e50914] px-3 py-1 text-sm text-center md:text-xl rounded-sm" onClick={() => setIsSignin(true)} >Sign In</button>
                </div>
                <div className="h-[91.6vh] text-center">
                  <div className="flex flex-col justify-center items-center h-full md:w-[600px] mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold">Unlimited movies, TV shows and more.</h1>
                    <p className="text-xl md:text-2xl mt-2 font-semibold">Watch anywhere.Cancel anytime.</p>
                    <p className="mt-6 text-base md:text-xl w-full">Ready to watch? Enter your email to create or restart your membership</p>
                    <form action="" className="flex w-full h-10 mt-3 text-black">
                      <input type="text" className="w-[70%] md:w-[80%] px-4 outline-none" />
                      <button className="md:px-2 px-1 bg-[#e50914] text-white cursor-pointer" onClick={() => setIsSignin(true)}>Get Started<span>&#62;</span></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="container1 flex flex-col md:flex-row justify-center items-center mt-3 h-[30rem] md:h-[25rem] ">
              <div className="w-full md:w-[50%] h-[50%] md:h-full flex flex-col justify-center items-center">
                <h1 className="text-4xl text-center">Enjoy on your TV.</h1>
                <p className="text-center text-xl font-semibold mt-6 px-4 md:px-[160px]">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
              </div>
              <div className="w-full md:w-[50%] h-[50%] md:h-full relative  ">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" className="w-full h-full object-contain  " alt="" />
                <video loop muted autoPlay className="absolute top-[50px] md:top-20 right-[45px] md:right-[194px] -z-10 w-[260px] md:w-[384px] z-50 ">
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="container2 flex flex-col md:flex-row justify-center items-center mt-3 h-[30rem] md:h-[25rem]">
              <div className="md:order-last w-full md:w-[50%] h-[50%] md:h-full flex flex-col justify-center items-center">
                <h1 className="text-4xl text-center">Download your shows to watch offline.</h1>
                <p className="text-center text-xl font-semibold mt-6 px-4 md:px-[160px]">Save your favourites easily and always have something to watch.</p>
              </div>
              <div className="w-full md:w-[50%] h-[50%] md:h-full">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" className="w-full h-full object-contain  z-50" alt="" />
              </div>
            </div>
            <div className="container3 flex flex-col md:flex-row justify-center items-center mt-3 h-[30rem] md:h-[25rem]">
              <div className="w-full md:w-[50%] h-[50%] md:h-full flex flex-col justify-center items-center">
                <h1 className="text-4xl text-center">Watch everywhere.</h1>
                <p className="text-center text-xl font-semibold mt-6 px-4 md:px-[160px]">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
              </div>
              <div className="w-full md:w-[50%] h-[50%] md:h-full relative">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" className="w-full h-full object-contain  z-50" alt="" />
                <video loop muted autoPlay className="absolute top-[22px] md:top-[40px] right-[95px] md:right-[224px] -z-10 w-[198px] md:w-[324px] ">
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="container4 flex flex-col md:flex-row justify-center items-center mt-3 h-[30rem] md:h-[25rem]">
              <div className="md:order-last w-full md:w-[50%] h-[50%] md:h-full flex flex-col justify-center items-center">
                <h1 className="text-4xl text-center">Create profiles for children.</h1>
                <p className="text-center text-xl font-semibold mt-6 px-4 md:px-[160px]">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
              </div>
              <div className="w-full md:w-[50%] h-[50%] md:h-full">
                <img src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420" className="w-full h-full object-contain  z-50" alt="" />
              </div>
            </div>
          </>
        ) : (
          <Loginhome />
        )
      }
    </section>
  )
}

export default Login