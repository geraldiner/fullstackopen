import React from 'react'

const Header = (props) => {
  return (
    <section>
      <h1>{props.course}</h1>
    </section>
  )
}

const Content = (props) => {
  return (
    <section>
      <Part name={props.part1} num={props.exercises1} />
      <Part name={props.part2} num={props.exercises2} />
      <Part name={props.part3} num={props.exercises3} />
    </section>
  )
}

const Total = (props) => {
  return (
    <section>
      <p>Number of exercises: {props.total}</p>
    </section>
  )
}

const Part = (props) => {
  return (
    <section>
      <p>{props.name}: {props.num}</p>
    </section>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <section>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </section>
  )
}

export default App