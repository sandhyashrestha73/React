import React from 'react'
import Section1 from './Component/Section1/Section1'
import Section2 from './Component/Section2/Section2'


const App = () => {
   const cards = [
  {
    number: "1",
    intro:"",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    tag:"Satisfied"
  },
  {
    number: "2",
    intro: "",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tag:"Satisfied"
  },
  {
    number: "3",
    intro: "",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    tag:"Satisfied"
  }
];




  return (
    <div >
      <Section1 cards={cards}/>
      <Section2/>
    
    </div>
  )
}

export default App