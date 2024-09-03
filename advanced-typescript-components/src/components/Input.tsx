import React, { ComponentPropsWithoutRef, forwardRef } from 'react'


// We are extending bcoz, we cant type all the props. So we are using spread operator and extending input properties 
interface InputProps extends ComponentPropsWithoutRef<'input'> {
    label: string;
    id: string;
}

//when using forwardRef we recieve Ref parameter from it. And we can forward it to input ref
const Input = forwardRef<HTMLInputElement, InputProps>(function Input({label, id, ...props}, ref) {
  return (
    <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props} ref={ref}/>
    </p>
  )
})

export default Input