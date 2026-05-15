import React from 'react'

const App = () => {
function onclick(elem){
  console.log(elem);
  
}
  return (
    <div>
      <button 
        onClick={(elem)=>{
          onclick(elem.target.innerText)
      }

      } >Click Here</button>
    </div>
  )
}

export default App

/*
function onclick(){
  console.log("clicked")
}
  return (
    <button onClick={onclick}>Click here</button>
  )


  */

  /*

  return(
  <button onclick={()=>{
          function showMessage() {
            console.log("clicked")
          }

          showMessage()

    }}
          >
          Click here</button>
          
  )
          */