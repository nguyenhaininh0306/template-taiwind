import React from 'react'
import MembersContainer from './MembersContainer'
import HomeContainer from './HomeContainer'
import ServicesContainer from './ServicesContainer'
import WorkContainer from './WorkContainer'
import ContactContainer from './ContactContainer'

const MainContainer = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer />
      <WorkContainer />
      <ServicesContainer />
      <MembersContainer />
      <ContactContainer />
    </div>
  )
}

export default MainContainer
