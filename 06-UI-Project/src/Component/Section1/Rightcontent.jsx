import React from 'react'
import Rightcard from './Rightcard'


const Rightcontent = (props) => {
  return (
    <div id='right' className='h-full rounded-4xl flex-nowrap overflow-x-auto gap-10 w-2/3 flex p-3'>
      {props.cards.map(function(elem){
        return <Rightcard img={elem.img} 
        number={elem.number}
        intro={elem.intro}
        tag={elem.tag}
        />
      })}
     
    </div>
  )
}

export default Rightcontent