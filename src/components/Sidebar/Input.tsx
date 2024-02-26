import { ComponentProps } from "react";


type InputRootProps = ComponentProps<'div'> 
type InputPrefixProps = ComponentProps<'div'> 
type InputControlProps = ComponentProps<'input'>


export function Prefix(props: InputPrefixProps) {
    return (
        <div {...props} />
    )
}

export function Control(props: InputControlProps) {
    return (
        <input className="flex-1 outline-none border-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600" {...props} />
    )
}


export function Root(props: InputRootProps) {
    return(
        <div className="flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm" {...props}>
        </div>
    ) 
}