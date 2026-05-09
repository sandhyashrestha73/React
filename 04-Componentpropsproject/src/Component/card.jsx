import React from 'react'

const card = () => {
  return (
    <div className="card">
     <div>
      <div className='top'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCw9ADW_e3phAevjk1wGYCyOujxGmT_3cTQQ&s" alt="" />
          <button>Save </button>
      </div>
     
      <div className='center'>
        <h3>Amazon <span>5 days ago</span></h3>
        <h4>Senior UI/UX Designer</h4>
        <div id='partse' >
          <h4>Part-Time</h4>
          <h4>Senior Level</h4>
          
        </div>
      </div>
      </div>
      <div className='buttom'>
        <div className='left'>
        <h3>$120/hr</h3>
        <p>Chitwan, Nepal</p>
        </div>
        <button>Apply Now</button>
      </div>
      </div>

  )
}

export default card