import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const ServicesContainer = () => {
  return (
    <div className='lg:w-[1200px] w-full flex flex-col items-center justify-center'>
      <div className='w-full mt-36'>
        <p className='text-5xl text-white text-center font-bold'>Services</p>
      </div>

      <div className='w-full flex flex-wrap gap-12 items-center justify-center mt-24'>
        <div className='md:w-[450px] md:h-[450px] w-full h-full flex-col bg-white relative border-1 hover:border-green-600'>
          <div className='px-6 py-[50px] '>
            <p className='text-3xl text-black font-semibold'>Graphic Design</p>
            <p className='w-[400px] text-sm py-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur
            </p>

            <p className='text-black text-lg font-semibold flex items-center gap-3 py-4'>
              See Detail <BsArrowRight />
            </p>
          </div>

          <div className='bg-green-500 absolute bottom-0 w-full'>
            <p className='px-6 py-2 text-white text-lg'>Starting at $400</p>
          </div>
        </div>

        <div className='md:w-[450px] md:h-[450px] w-full h-full flex-col bg-white relative border-1 hover:border-green-600'>
          <div className='px-6 py-[50px] '>
            <p className='text-3xl text-black font-semibold'>Graphic Design</p>
            <p className='w-[400px] text-sm py-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur
            </p>

            <p className='text-black text-lg font-semibold flex items-center gap-3 py-4'>
              See Detail <BsArrowRight />
            </p>
          </div>

          <div className='bg-green-500 absolute bottom-0 w-full'>
            <p className='px-6 py-2 text-white text-lg'>Starting at $350</p>
          </div>
        </div>

        <div className='md:w-[450px] md:h-[450px] w-full h-full flex-col bg-white relative border-1 hover:border-green-600'>
          <div className='px-6 py-[50px] '>
            <p className='text-3xl text-black font-semibold'>Graphic Design</p>
            <p className='w-[400px] text-sm py-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur
            </p>

            <p className='text-black text-lg font-semibold flex items-center gap-3 py-4'>
              See Detail <BsArrowRight />
            </p>
          </div>

          <div className='bg-green-500 absolute bottom-0 w-full'>
            <p className='px-6 py-2 text-white text-lg'>Starting at $800</p>
          </div>
        </div>

        <div className='md:w-[450px] md:h-[450px] w-full h-full flex-col bg-white relative border-1 hover:border-green-600'>
          <div className='px-6 py-[50px] '>
            <p className='text-3xl text-black font-semibold'>Graphic Design</p>
            <p className='w-[400px] text-sm py-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur
            </p>

            <p className='text-black text-lg font-semibold flex items-center gap-3 py-4'>
              See Detail <BsArrowRight />
            </p>
          </div>

          <div className='bg-green-500 absolute bottom-0 w-full'>
            <p className='px-6 py-2 text-white text-lg'>Starting at $1000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesContainer
