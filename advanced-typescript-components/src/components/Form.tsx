import React, { ComponentPropsWithoutRef, FormEvent } from 'react'

interface FormProps extends ComponentPropsWithoutRef<'form'>{
    onSave: (value: unknown) => void;
}

function Form(props: FormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const data= Object.fromEntries(formData)
     props.onSave(data)

  }  
  return (
    <form onSubmit={handleSubmit} {...props}>{props.children}</form>
  )
}

export default Form