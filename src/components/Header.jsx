import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineBars } from 'react-icons/ai'

const Header = () => {
  const [isMenu, setIsMenu] = useState(false)
  return (
    <div className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-[#000000]'>
      {/** desktop */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={'/'}>
          <p className='text-white text-xl font-bold'>LOGO</p>
        </Link>

        <div className='w-[420px] h-[24px] mr-10'>
          <ul className='flex items-center justify-between'>
            <li className='text-base text-white cursor-pointer '>HOME</li>
            <li className='text-base text-white cursor-pointer '>SERVICES</li>
            <li className='text-base text-white cursor-pointer '>CONTACT</li>
          </ul>
        </div>
      </div>

      {/** mobile */}
      <div className='flex items-center justify-between md:hidden w-full h-full'>
        <Link to={'/'} className='p-5'>
          <p className='text-white text-xl font-bold'>LOGO</p>
        </Link>

        <div className='relative '>
          <AiOutlineBars
            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer text-white'
            onClick={() => setIsMenu(!isMenu)}
          />

          {isMenu && (
            <div className='w-40 bg-slate-50 shadow-xl rounded-lg flex flex-col absolute top-15 right-0'>
              <ul className='flex flex-col'>
                <li className='text-base text-slate-800 cursor-pointer hover:bg-slate-100 duration-100 transition-all ease-in-out px-4 py-2'>
                  HOME
                </li>

                <li className='text-base text-slate-800 cursor-pointer hover:bg-slate-100 duration-100 transition-all ease-in-out px-4 py-2'>
                  SERVICES
                </li>

                <li className='text-base text-slate-800 cursor-pointer hover:bg-slate-100 duration-100 transition-all ease-in-out px-4 py-2'>
                  CONTACT
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
