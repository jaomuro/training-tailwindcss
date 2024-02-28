import { ComponentProps } from "react";

interface TextAreaProps extends ComponentProps<'textarea'> {}

export function TextArea(props: TextAreaProps) {
    return (
        <textarea {...props}
            className='min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm'
            >
            </textarea>
    )
}