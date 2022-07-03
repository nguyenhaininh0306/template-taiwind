import React from 'react'

const ContactContainer = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='w-full mt-36'>
        <p className='text-5xl text-white text-center font-bold'>Contact</p>
      </div>

      <div className='flex flex-col items-center justify-center mt-10'>
        <p className='text-xl text-white'>contact@website.com</p>
        <p className='text-xl text-white'>+0 0000 0000</p>
      </div>

      <div className='md:w-full w-[250px] mt-16 mb-52'>
        <ul className='flex flex-wrap items-center justify-center md:gap-24 gap-3'>
          <li className='text-base text-white cursor-pointer'>Twitter</li>
          <li className='text-base text-white cursor-pointer'>Linkedln</li>
          <li className='text-base text-white cursor-pointer'>Dribble</li>
          <li className='text-base text-white cursor-pointer'>YouTube</li>
          <li className='text-base text-white cursor-pointer'>Instagram</li>
          <li className='text-base text-white cursor-pointer'>Facebook</li>
        </ul>
      </div>
    </div>
  )
}

export default ContactContainer
