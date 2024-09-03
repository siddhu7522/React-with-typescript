import { useContext } from "react";
import { TimersContext } from "../store/timers-context";
import Timer from "./Timer";

export default function Timers() {
 const {timers} = useContext(TimersContext)
  return <ul>
    {timers.map(timer=><li key={timer.name}>
      <Timer {...timer} />
    </li>)}
  </ul>;
}
