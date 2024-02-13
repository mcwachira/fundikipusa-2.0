"use client"
import clsx from 'clsx'
import React from "react";
interface ContainerTypes{
    className?:string,
    props:React.ReactNode;
}

function Container({ className, ...props }:ContainerTypes) {
    return (
        <div
            className={clsx(
                'mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8',
                className
            )}
            {...props}
        />
    )
}

export default Container