import React, { useEffect, useState } from 'react'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={isScrolled ? "bg-[#141414]" : "bg-white"}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className='hidden md:space-x-4 md:flex'>
          <li className='headerLink'>Home</li>
          <li className='headerLink'>TV Shows</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>New & Popular</li>
          <li className='headerLink'>My List</li>
        </ul>
      </div>

      <div className="right flex items-center space-x-4 text-sm">
        <SearchIcon className='hidden h-6 w-6 sm:inline' />
        <p className='hidden lg:inline' >Kids</p>
        <BellIcon className='h-6 w-6' />
        <Link href="/account" >
          <img
            src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
            alt="profilelogo"
            className='h-8 cursor-pointer rounded'
          />
        </Link>
      </div>
    </header>
  )
}

export default Header