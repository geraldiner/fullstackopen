import React from 'react'

const Hello = (props) => {
  return (
    <section>
      <p>Hello, {props.name}! You are {props.age}.</p>
    </section>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <section>
      <h1>Greetings</h1>
      <Hello name="George" age={25 + 10} />
      <Hello name="Daisy" age="33" />
      <Hello name={name} age={age} />
    </section>
  )
}

export default App