/*  import React, { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState('Sandhya')
  const [array, setArray] = useState([10,20,30])
  function ChangeName(){
    setUsername('Bikram')
    setArray([20,40,60])
    
  }
  return (
    <div>
      <h1>Hello Everyone! This is {username} <br /><br />and Array value {array}</h1>
      <button onClick={ChangeName}>Click Here!!</button>

    </div>
  )
}

export default App

*/






import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  function Increase(){
    setNum(num+1)
    
  }
  function Reset(){
    setNum(0)
  }
  function Decrease(){
    setNum(num-1)
  }
  return (
    <div id='container'>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Reset}>Reset</button> <br /> <br />
       <h1>{num}</h1>
    </div>
  )
}

export default App