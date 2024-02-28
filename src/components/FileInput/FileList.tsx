'use client'

import { FileItem } from "./FileItem"
import { useFileInput } from "./Root"
import { useAutoAnimate } from '@formkit/auto-animate/react'




export function FileList() {
    const {files} = useFileInput()
    const [parent] = useAutoAnimate()

    return(
        <div className="mt-4 space-y-3" ref={parent}>
            {files.map(file =>{
                return <FileItem name={file.name} size={file.size} key={file.name}/>
            })}
        </div>
    )
}