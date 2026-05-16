import React from 'react'

const App = () => {
  const submitform=(e)=>{
    e.preventDefault()
    console.log("Form Submitted");
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitform(e)}}>
        <input type="text" placeholder='Enter Username' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App