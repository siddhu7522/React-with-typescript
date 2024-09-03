import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

interface ContainerProps {
    as: ElementType;
    children: ReactNode;
}


function Container({ as,children }: ContainerProps) {
    const Component = as
    return (
        <Component>{children}</Component>
    )
}

export default Container