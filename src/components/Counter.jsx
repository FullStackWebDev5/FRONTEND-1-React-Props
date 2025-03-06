import { useState } from 'react'
import IncrementCounter from './IncrementCounter'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div style={{ 
      border: '1px solid white', 
      padding: '2em'
    }}>
      <span>PARENT</span>
      <h1>{count}</h1>
      
      <IncrementCounter 
        count={count} 
        setCount={setCount} 
      />

      <button 
        onClick={() => setCount(count - 1)}
        style={{ marginTop: '1em' }}
      >Decrement</button>
    </div>
  )
}

export default Counter