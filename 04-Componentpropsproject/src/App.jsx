
import React from 'react'


const App = () => {
  return (
    <div className="parent">
      <div className="card">
      <div className='top'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCw9ADW_e3phAevjk1wGYCyOujxGmT_3cTQQ&s" alt="" />
          <button>Save </button>
      </div>
      <div className='center'>
        <h3>Amazon <span>5 days ago</span></h3>
        <h4>Senior UI/UX Designer</h4>
        <div>
          <h4>Part Time</h4>
          <h4>Senior Level</h4>
        </div>
      </div>
      <div className='buttom'>
        <h3>$120/hr</h3>
        <p>Chitwan, Nepal</p>
        <button>Apply Now</button>
      </div>
      </div>
    </div>
  )
}

export default App