import React, { useRef, type FormEvent } from 'react'

interface NewGoalProps{
    onAddGoal:(goal:string, summary: string) => void;
}

function NewGoal({onAddGoal}: NewGoalProps) {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //We are adding ! bcoz to say typescript that goal.current will never be null
        const enteredGoal = goal.current!.value
        const enteredSummary = summary.current!.value
        e.currentTarget.reset()
        onAddGoal(enteredGoal, enteredSummary)
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor='goal'>Your goal</label>
                <input id="goal" type='text' ref={goal} />
            </p>
            <p>
                <label htmlFor='summary'>Short summary</label>
                <input id="summary" type='text' ref={summary} />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    )
}

export default NewGoal