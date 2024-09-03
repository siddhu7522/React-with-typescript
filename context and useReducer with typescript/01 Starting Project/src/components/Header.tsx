import { useContext } from 'react';
import Button from './UI/Button.tsx';
import { TimersContext } from '../store/timers-context.tsx';

export default function Header() {
  // we are adding ! mark at end to say timersCtx will never be null 
  const timersCtx = useContext(TimersContext)!
  return (
    <header>
      <h1>ReactTimer</h1>
      <Button onClick={timersCtx.isRunning ? timersCtx.stopTimers: timersCtx.startTimers} >{timersCtx?.isRunning ? 'Stop' : 'Start'} Timer</Button>
    </header>
  );
}
