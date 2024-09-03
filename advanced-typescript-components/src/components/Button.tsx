import React, { ComponentPropsWithoutRef, ReactNode } from 'react'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    el: 'button',
    children:ReactNode
}

interface AnchorProps extends ComponentPropsWithoutRef<'a'> {
    el: "anchor"
}

function Button(props: ButtonProps | AnchorProps) {
    if (props.el == "anchor") {
        return <a className='button' {...props}></a>
    }
    return (
        <button className='button' {...props}>{props.children}</button>
    )
}

export default Button