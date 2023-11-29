import React from 'react'
import { useState } from 'react'


 function Q2() {

    const [count, setCount] = useState(0)

    const add = () => {

        return setCount(count + 2)

    }

  return (
    <div>
      
        <h4>Count is : {count}</h4>
        <button onClick={add}>+</button>

    </div>
  )
}

export default Q2;
