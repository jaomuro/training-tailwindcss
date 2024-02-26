'use client'
import { ChangeEvent, ComponentProps } from "react";
import { useFileInput } from "./Root";

type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
    const {id, onFilesSelected} = useFileInput()

    function handleFilesSelected(evt: ChangeEvent<HTMLInputElement>) {
        if(!evt.target.files?.length){
            return
        }

        const files = Array.from(evt.target.files) //conversão de Filelist para array de Files

        onFilesSelected(files)
    }
    return (
        <input type="file" id={id} className='sr-only' onChange={handleFilesSelected} {...props}/>
    )
}