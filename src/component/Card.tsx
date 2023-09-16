import React from 'react'

const Card = ({ children }: { children: JSX.Element }) => {
    return (
        <div>{children}</div>
    )
}

const CardBody = ({ children }: { children: string }) => {
    return (
        <div>{children}</div>
    )
}

const CardFooter = ({ children }: { children: string }) => {
    return (
        <div>{children}</div>
    )
}

Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card