import React from 'react';

// Määritellään Header komponentti 

const Header = ({course}) => {
  return <h1>{course}</h1>
}

// Määritellään Content komponentti
const Content = ({parts})=>{
  return 
    <div>
      {parts.map(part, index) =>
        <p key={index}
        
        ></p>
      
      
      }
      </div>
}

// Määritellään numbers komponentti


const App =  () =>{
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of react'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <div>
      <Header course={course}/>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>


    </div>
  )

}

export default App;
