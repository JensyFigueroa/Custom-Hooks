import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
  return (
    <>
        <h2>Counter</h2>
        <button onClick={() => setCounter(counter + 1)} >Counter: {counter}</button>
    </>
  )
}

export default Counter