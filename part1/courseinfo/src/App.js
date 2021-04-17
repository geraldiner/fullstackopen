import React from 'react'
const Header = (props) => {
  <h1>{props.course}</h1>
}

const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
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
      <Content ... />
      <Total ... />
    </section>
  )
}

export default App