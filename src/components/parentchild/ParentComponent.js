import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {

    const [answer, setAnswer] = useState("")

    const setQuiz = (quiz) => {
        if (quiz === 'react') {
            setAnswer(`Your answer ${quiz} is right`)
        } else {
            setAnswer(`Your answer ${quiz} is wrong`)
        }
    }

    return (
        <ChildComponent
            yourAnswer={answer}
            onQuiz={setQuiz}
        />

    )
}
