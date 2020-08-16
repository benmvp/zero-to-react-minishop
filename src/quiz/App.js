import React from 'react'
import PropTypes from 'prop-types'

const AutoTypist = ({ phrases /*, typeSpeed, backspaceSpeed*/ }) => {
  if (phrases.length === 0) {
    return null
  }

  // Use `useState` to maintain the state of the current phrase
  // as well as the current partial phrase being typed

  const partial = phrases[0]

  // Use `useEffect` to set and clear timeouts for typing and
  // backspacing each phrase

  return <span style={{ color: 'red' }}>{partial}</span>
}
AutoTypist.propTypes = {
  phrases: PropTypes.arrayOf(PropTypes.string).isRequired,
  typeSpeed: PropTypes.number,
  backspaceSpeed: PropTypes.number,
}
AutoTypist.defaultProps = {
  typeSpeed: 100,
  backspaceSpeed: 25,
}

const App = () => {
  return (
    <h1>
      My favorite hobbies are{' '}
      <AutoTypist
        phrases={['playing basketball', 'watching movies', 'DIY', 'napping']}
      />
    </h1>
  )
}

export default App
