import React, { ReactNode } from 'react'
import CourseGoal from './CourseGoal'
import { type CourseGoal as CGoal } from '../App'
import InfoBox from './InfoBox';

interface CourseGoalListProps {
    goals: CGoal [];
    onDeleteGoal: (id: number) => void;

}
function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
    if(goals.length === 0){
        return <InfoBox mode="hint">You have no course goals yet. Start adding some!</InfoBox>
    }

    let warningBox: ReactNode;
    if(goals.length >=4){
        warningBox=(
            <InfoBox mode='warning' severity='high'>
                You're collecting a lot of goals. Dont put too much on your plate!
            </InfoBox>
        )
    }
    return (
        <>
        {warningBox}
        <ul>
            {goals.map((goal) => {
                return (
                    <li key={goal.id}>
                        <CourseGoal id={goal.id} onDelete={onDeleteGoal} title={goal.title} >
                            <p>{goal.description}</p>
                        </CourseGoal>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default CourseGoalList