import React,{useState} from 'react'

export default function CounterHook() {

    const [counter, setCounter] = useState(5)

    return (
        <div>
            <h2>Counter Hook</h2>
            <h3>Counter : {counter}</h3>
            <button onClick={()=>setCounter(counter +5)}>+</button>
            <button onClick={()=> setCounter(counter-5)}>-</button>
        </div>
    )
}
