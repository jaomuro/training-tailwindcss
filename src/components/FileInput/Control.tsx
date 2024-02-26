'use client'
import { ComponentProps } from "react";
import { useFileInput } from "./Root";

type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
    const {id} = useFileInput()
    return (
        <input type="file" id={id} className='sr-only' {...props}/>
    )
}