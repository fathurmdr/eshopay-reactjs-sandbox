import React from 'react'

export default function ChildComponent(props) {
    return (
        <div>
        <h2>Quiz Programming</h2>
        <p>What programming for build cross-platform app?</p>
        <button onClick={()=> props.onQuiz('react')}>React</button>
        <button onClick={()=> props.onQuiz('python')}>Python</button>
        <button onClick={()=> props.onQuiz('golang')}>Golang</button>
        <h2>{props.yourAnswer}</h2>
    </div>
    )
}
