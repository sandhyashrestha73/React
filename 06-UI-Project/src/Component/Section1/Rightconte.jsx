import React from 'react'

const Rightconte = (props) => {
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-8 bg-black/20 text-white'>
        <h2 className='bg-white text-1xl text-black rounded-full font-semibold w-12 h-12 flex items-center justify-center'>
          {props.number}
        </h2>

        <div className='mt-6'>
          <p className='text-xl leading-normal text-white mb-10 text-shadow-2xs '>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet commodi repudiandae quam recusandae ipsa.
          </p>

          <div className='mt-4'>
            <button className='bg-blue-600 text-white px-8 py-2 font-medium rounded-full'>
              {props.tag}
            </button>
          </div>
        </div>
      </div>


      
    </div>
  )
}

export default Rightconte