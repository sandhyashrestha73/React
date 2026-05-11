import React from 'react'

const Section2 = () => {
  return (
    <div className='h-screen w-full bg-gray-900 text-white px-20 py-16'>
      <h1 className='text-5xl font-bold mb-8'>
        Why Customer Segmentation Matters
      </h1>

      <p className='text-lg text-gray-300 max-w-3xl mb-10 leading-relaxed'>
        Customer segmentation helps businesses identify different groups of users
        based on their behavior, needs, and preferences. It allows companies to
        create better marketing strategies, improve customer experience, and
        increase overall satisfaction.
      </p>

      <div className='grid grid-cols-3 gap-8 mt-10'>
        <div className='bg-gray-800 p-8 rounded-3xl'>
          <h2 className='text-2xl font-semibold mb-4'>Targeted Marketing</h2>
          <p className='text-gray-400'>
            Deliver the right message to the right audience for better
            conversion and engagement.
          </p>
        </div>

        <div className='bg-gray-800 p-8 rounded-3xl'>
          <h2 className='text-2xl font-semibold mb-4'>Better User Experience</h2>
          <p className='text-gray-400'>
            Understand customer needs and provide personalized services that
            improve satisfaction.
          </p>
        </div>

        <div className='bg-gray-800 p-8 rounded-3xl'>
          <h2 className='text-2xl font-semibold mb-4'>Business Growth</h2>
          <p className='text-gray-400'>
            Strong segmentation helps businesses make smarter decisions and
            increase long-term revenue.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section2