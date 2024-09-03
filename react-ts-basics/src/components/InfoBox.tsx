import React, {type ReactNode } from 'react'


interface HintBoxProps{
    mode: 'hint';
    children: ReactNode;
}

interface WarningBoxProps {
    mode: 'warning';
    severity: 'low' | 'medium' | 'high';
    children: ReactNode
}

type InfoBoxProps = HintBoxProps | WarningBoxProps

function InfoBox(props: InfoBoxProps) { 
    if(props.mode == 'hint'){
        return (
            <aside className='infobox infobox-hint'>
                <p>{props.children}</p>
            </aside>
          )
    }

    //We can access severity only if mode is not hint
        return (
            <aside className={`infobox infobox-warning warning--${props.severity}`}>
                <h1>Warning</h1>
                <p>{props.children}</p>
            </aside>
          )
    }
export default InfoBox