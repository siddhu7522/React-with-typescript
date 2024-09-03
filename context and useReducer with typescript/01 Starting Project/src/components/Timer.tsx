import Container from './UI/Container.tsx';
import { Timer as TimerProps, TimersContext } from '../store/timers-context.tsx';
import { useContext, useEffect, useRef, useState } from 'react';


export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null)
  const [remainingTime, setRemainingTime] = useState(duration * 1000)
  const { isRunning } = useContext(TimersContext)

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current)
  }
  useEffect(() => {
    let timer:number;
    if (isRunning) {
       timer = setInterval(() => {
        setRemainingTime(prevState => prevState - 50)
      }, 50)
      interval.current = timer;
    } else if (!isRunning && interval.current) {
      clearInterval(interval.current)
    }

    return () => {
      clearInterval(timer)
    }
  }, [isRunning])

  const formattedRemaningTime = (remainingTime / 1000).toFixed(2)

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p><progress value={remainingTime} max={duration * 1000} /></p>
      <p>{formattedRemaningTime}</p>
    </Container>
  );
}
