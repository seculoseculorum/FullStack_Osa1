import React from 'react';

/*
Refaktoroitu koodi. 
*/


const Header = ({ course }) => {
  //Hakee kurssin nimen APPistä 
  return <h1>{course}</h1>;
};

const Part = ({ part, exercises }) => {
  //Haetaan osa (part) ja harjoitteet (exercises) */}
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  //Hakee sisällön osat
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Total = ({ total }) => {
  //Total hakee määrän harjoitteita
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  //Sisällöt vidään komponentteihin
  const course = 'Half Stack application development';
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 },
  ];
  // Lasketaan harjoitteiden kokonaismäärä
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={totalExercises} />
    </div>
  );
};

export default App;
