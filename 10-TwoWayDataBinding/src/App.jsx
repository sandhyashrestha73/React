import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const submitform=(e)=>{
    e.preventDefault()
    console.log("Form Submitted By", title);
    setTitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitform(e)}}>
        <input type="text" placeholder='Enter Username' value={title} onChange={(e)=>{
          setTitle(e.target.value)
        }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App