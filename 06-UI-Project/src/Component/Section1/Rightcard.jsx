import React from 'react'
import Rightconte from './Rightconte'

const Rightcard = (props) => {
  return (
    <div className='relative shrink-0 h-full overflow-hidden w-80 rounded-4xl'>
      <img
        className='h-full w-full object-cover'
        src={props.img}
        alt=""
      />

    <Rightconte number={props.number}
        intro={props.intro}
        tag={props.tag}/>
    </div>
  )
}

export default Rightcard