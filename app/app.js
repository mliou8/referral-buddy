import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
          <button><Link to="/signup">Sign Up</Link></button>
      </div>
    )
  }
}

export default App 
