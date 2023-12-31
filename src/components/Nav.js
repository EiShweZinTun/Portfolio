import React from 'react'
// import icons
import { BiBriefcase, BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsChatSquare } from 'react-icons/bs';
//link
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav class='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div class='container mx-auto'>
        <div class='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center'>
          <Link to = 'home' activeClass='active' smooth={true} spy={true} offset={-200} class = 'cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiHomeAlt />
          </Link>
          <Link to = 'about' activeClass='active' smooth={true} spy={true} class = 'cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiUser />
          </Link>
          <Link to = 'work' activeClass='active' smooth={true} spy={true} class = 'cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiBriefcase />
          </Link>
          <Link to = 'skill' activeClass='active' smooth={true} spy={true} class = 'cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsClipboardData />
          </Link>
          <Link to = 'contact' activeClass='active' smooth={true} spy={true} class = 'cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav;