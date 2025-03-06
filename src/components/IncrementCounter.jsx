import React from 'react'

function IncrementCounter(props) {
  return (
    <div style={{ 
      border: '1px solid white', 
      padding: '2em'
    }}>
      <span>CHILD</span>
      <h2>{props.count}</h2>
      <button 
        onClick={() => props.setCount(props.count + 1)}
        style={{ marginTop: '1em' }}
      >Increment</button>
    </div>
  )
}

export default IncrementCounter