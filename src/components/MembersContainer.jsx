import React from 'react'
import Member2 from '../img/member2.png'
import Member3 from '../img/member3.png'
import Member4 from '../img/member4.png'

const MembersContainer = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='w-full mt-36'>
        <p className='text-5xl text-white text-center font-bold'>Our Team</p>
      </div>

      <div className='lg:w-[1000px] md:w-full mt-12'>
        <p className='text-lg text-center text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>

      <div className='w-full h-full flex md:flex-row flex-col items-center justify-center mt-16'>
        <div className='group relative'>
          <img src={Member3} alt='' />

          <div className='md:w-full w-[60%] bg-white py-3 px-6 absolute bottom-0 md:hidden block group-hover:block'>
            <p className='md:text-3xl text-xl text-black font-bold'>Jhon Doe</p>
            <p className='md:text-lg text-sm text-black'>
              Digital Marketing Manager
            </p>
          </div>
        </div>

        <div className='group relative'>
          <img src={Member3} alt='' />

          <div className='md:w-full w-[60%] bg-white py-3 px-6 absolute bottom-0 right-0 md:hidden block group-hover:block'>
            <p className='md:text-3xl text-xl text-black font-bold'>Bill</p>
            <p className='md:text-lg text-sm text-black'>Editor</p>
          </div>
        </div>

        <div className='group relative'>
          <img src={Member2} alt='' />

          <div className='md:w-full w-[60%] bg-white py-3 px-6 absolute bottom-0  md:hidden block group-hover:block'>
            <p className='md:text-3xl text-xl text-black font-bold'>Susan</p>
            <p className='md:text-lg text-sm text-black'>Human Resource</p>
          </div>
        </div>

        <div className='group relative'>
          <img src={Member4} alt='' />

          <div className='md:w-full w-[60%] bg-white py-3 px-6 absolute bottom-0 right-0 md:hidden block group-hover:block'>
            <p className='md:text-3xl text-xl text-black font-bold'>Mark</p>
            <p className='md:text-lg text-sm text-black'>Front-End Developer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MembersContainer
