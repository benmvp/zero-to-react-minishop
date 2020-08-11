import React from 'react'

const TextInput = (props) => {
  const { id, placeholder, color } = props

  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      style={{ color: color, marginTop: 30 }}
    />
  )
}

const App = () => {
  const contents = 'This is a paragraph of text written in React'
  const inputId = 'input'
  const numItems = 3

  return (
    <main style={{ maxWidth: '750px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '5em' }}>Learn React!</h1>
      <p className="text-center">{contents}</p>
      <label htmlFor={inputId}>Input label</label>
      <TextInput
        id={inputId}
        placeholder={`Search ${numItems} items`}
        color="#00008b"
      />
    </main>
  )
}

export default App
