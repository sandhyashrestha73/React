import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1Content = (props) => {
  return (
    <div className='flex  gap-10  item-center justify-between pt-6 pb-20 h-[90vh]  px-18'>
        <Leftcontent/>
        <Rightcontent cards={props.cards}/>
    </div>
  )
}

export default Page1Content