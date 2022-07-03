import React from 'react'
import Img1 from '../img/img1.png'
import Img3 from '../img/img3.png'
import Img4 from '../img/img4.png'
import Img5 from '../img/img5.png'
import Img6 from '../img/img6.png'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

const WorkContainer = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='w-full mt-36'>
        <p className='text-5xl text-white text-center font-bold'>Work</p>
      </div>

      <div className='w-full h-full flex flex-wrap items-center justify-center mt-24 '>
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className='group relative'
        >
          <img src={Img1} alt='' />
          <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 1 } }}
            className='bg-white md:px-8 md:py-6 px-4 py-2 absolute bottom-0 left-0 md:w-full md:hidden block group-hover:block z-50 w-[60%]'
          >
            <p className='text-black md:text-3xl text-xl font-semibold'>
              Abstract Design
            </p>
            <p className='text-black md:text-sm text-[8px] md:py-6 py-0 md:w-[650px] w-full'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Possimus, iste? Consequatur doloribus amet aliquam unde mollitia
              commodi eius laborum numquam itaque alias? Aut neque harum a nulla
              saepe facilis rem.
            </p>
            <p className='text-black md:text-lg text-sm font-semibold md:flex items-center gap-3 py-2 hidden'>
              See Project <BsArrowRight />
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className='group relative'
        >
          <img src={Img1} alt='' />
          <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 1 } }}
            className='bg-white md:px-8 md:py-6 px-4 py-2 absolute bottom-0 right-0 md:w-full md:hidden block group-hover:block z-50 w-[60%]'
          >
            <p className='text-black md:text-3xl text-xl font-semibold'>
              Abstract Design
            </p>
            <p className='text-black md:text-sm text-[8px] md:py-6 py-0 md:w-[650px] w-full'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Possimus, iste? Consequatur doloribus amet aliquam unde mollitia
              commodi eius laborum numquam itaque alias? Aut neque harum a nulla
              saepe facilis rem.
            </p>
            <p className='text-black md:text-lg text-sm font-semibold md:flex items-center gap-3 py-2 hidden'>
              See Project <BsArrowRight />
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className='group relative'
        >
          <img src={Img3} alt='' />
          <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 1 } }}
            className='bg-white md:px-8 md:py-6 px-4 py-2 absolute bottom-0 left-0 md:w-full md:hidden block group-hover:block z-50 w-[60%]'
          >
            <p className='text-black md:text-3xl text-xl font-semibold'>
              Abstract Design
            </p>
            <p className='text-black md:text-sm text-[8px] md:py-6 py-0 md:w-[650px] w-full'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Possimus, iste? Consequatur doloribus amet aliquam unde mollitia
              commodi eius laborum numquam itaque alias? Aut neque harum a nulla
              saepe facilis rem.
            </p>
            <p className='text-black md:text-lg text-sm font-semibold md:flex items-center gap-3 py-2 hidden'>
              See Project <BsArrowRight />
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className='group relative'
        >
          <img src={Img4} alt='' />
          <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 1 } }}
            className='bg-white md:px-8 md:py-6 px-4 py-2 absolute bottom-0 right-0 md:w-full md:hidden block group-hover:block z-50 w-[60%]'
          >
            <p className='text-black md:text-3xl text-xl font-semibold'>
              Abstract Design
            </p>
            <p className='text-black md:text-sm text-[8px] md:py-6 py-0 md:w-[650px] w-full'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Possimus, iste? Consequatur doloribus amet aliquam unde mollitia
              commodi eius laborum numquam itaque alias? Aut neque harum a nulla
              saepe facilis rem.
            </p>
            <p className='text-black md:text-lg text-sm font-semibold md:flex items-center gap-3 py-2 hidden'>
              See Project <BsArrowRight />
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className='group relative'
        >
          <img src={Img5} alt='' />
          <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 1 } }}
            className='bg-white md:px-8 md:py-6 px-4 py-2 absolute bottom-0 left-0 md:w-full md:hidden block group-hover:block z-50 w-[60%]'
          >
            <p className='text-black md:text-3xl text-xl font-semibold'>
              Abstract Design
            </p>
            <p className='text-black md:text-sm text-[8px] md:py-6 py-0 md:w-[650px] w-full'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Possimus, iste? Consequatur doloribus amet aliquam unde mollitia
              commodi eius laborum numquam itaque alias? Aut neque harum a nulla
              saepe facilis rem.
            </p>
            <p className='text-black md:text-lg text-sm font-semibold md:flex items-center gap-3 py-2 hidden'>
              See Project <BsArrowRight />
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className='group relative'
        >
          <img src={Img6} alt='' />
          <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 1 } }}
            className='bg-white md:px-8 md:py-6 px-4 py-2 absolute bottom-0 right-0 md:w-full md:hidden block group-hover:block z-50 w-[60%]'
          >
            <p className='text-black md:text-3xl text-xl font-semibold'>
              Abstract Design
            </p>
            <p className='text-black md:text-sm text-[8px] md:py-6 py-0 md:w-[650px] w-full'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Possimus, iste? Consequatur doloribus amet aliquam unde mollitia
              commodi eius laborum numquam itaque alias? Aut neque harum a nulla
              saepe facilis rem.
            </p>
            <p className='text-black md:text-lg text-sm font-semibold md:flex items-center gap-3 py-2 hidden'>
              See Project <BsArrowRight />
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default WorkContainer
