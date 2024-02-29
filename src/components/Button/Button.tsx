import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
    base: ['rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border outline-none',
            'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
            'active:opacity-80'],
    
    variants: {
        variant: {
            primary: 'bg-violet-600 text-white hover:bg-violet-700',
            outline: 'border border-zinc-300 text-zinc-700 hover:bg-zinc-50',
            icon: 'p-2 hover:bg-zinc-50 rounded-md border-none shadow-none textzin500'
        }
    },
    defaultVariants:{
        variant: 'primary'
    },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({variant, className,...props}: ButtonProps) {
    return(
        <button 
        {...props}
        className={button({variant, className})}>
        </button>
    )
}