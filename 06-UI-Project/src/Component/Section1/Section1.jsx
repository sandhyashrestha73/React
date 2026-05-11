import React from 'react'
import Page1Content from './Page1Content'
import Navbar from './Navbar'

const Section1 = (props) => {
  return (
    <>
    <div className='h-screen w-full '><Navbar/>
    <Page1Content cards={props.cards}/>
    </div>

    
    </>
  )
}

export default Section1