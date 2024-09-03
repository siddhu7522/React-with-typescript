import Header from './components/Header'
import goalsImg from "./assets/goals.jpg"
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal';

export interface CourseGoal {
  title: string,
  description: string,
  id: number;
}

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([])

  const addGoalHandler = (goal:string, summary:string) => {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: goal,
      description: summary
    }
    setGoals((prevGoals) => [...prevGoals, newGoal])
  }

  const handleDeleteGoal = (id: number) =>{
    setGoals(prevGoals=>prevGoals.filter((goal)=>goal.id!==id))
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your course goals</h1>
      </Header>
     <NewGoal onAddGoal={addGoalHandler}/>
      <CourseGoalList onDeleteGoal={handleDeleteGoal} goals={goals}/>
    </main>
  )
}

export default App
