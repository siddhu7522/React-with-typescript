import { ReactNode, createContext, useReducer } from "react";


export interface Timer {
    name: string;
    duration: number;
}

interface TimersState {
    isRunning: boolean;
    timers: Timer[]
}

const initialState: TimersState = {
    isRunning: true,
    timers: []
}

interface TimersContextValue extends TimersState {
    addTimer: (timerData: Timer) => void;
    startTimers: () => void;
    stopTimers: () => void;
}

type StartTimersAction ={
    type: "START_TIMERS"
}

type StopTimersAction ={
    type: "STOP_TIMERS"
}

type AddTimerAction = {
    type: "ADD_TIMER",
    payload: Timer
}

type Action = StartTimersAction | StopTimersAction | AddTimerAction


const timersReducers= (state: TimersState, action: Action): TimersState =>{
    if(action.type === "START_TIMERS" ) {
        return {
            ...state,
            isRunning: true
        }
    }

    if(action.type === 'STOP_TIMERS') {
        return {
            ...state,
            isRunning: false
        }
    }

    if(action.type === 'ADD_TIMER') {
        return {
            ...state,
            timers:[
                ...state.timers,
                {
                    name: action.payload.name,
                    duration: action.payload.duration
                }
            ]
            
        }
    }
    return state
}

export const TimersContext = createContext<TimersContextValue | null>(null)

interface TimersContextProviderProps {
    children: ReactNode
}


export function TimersContextProvider({ children }: TimersContextProviderProps) {
    const [timersState, dispatch] = useReducer(timersReducers, initialState)
        
    
    
    const ctx:TimersContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer(timerData){
            dispatch({type: 'ADD_TIMER', payload:timerData})
        },
        startTimers(){
            dispatch({type: 'START_TIMERS'})
        },
        stopTimers(){
            dispatch({type:'STOP_TIMERS'})
        }
    }
    return (
        <TimersContext.Provider value={ctx}>
            {children}
        </TimersContext.Provider>
    )
}