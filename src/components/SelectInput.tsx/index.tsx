'use client'
import * as Select from "@radix-ui/react-select";
import {  ChevronDown } from "lucide-react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface SelectInputProps extends Select.SelectProps{
  children: ReactNode
  placeholder: string
}

export function SelectInput({children, placeholder, ...props}: SelectInputProps) {
  return(
    <Select.Root {...props}>
    <Select.Trigger className={twMerge(
      'flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 dark:data-[placeholder]:text-zinc-400',
      'focus:border-violet-400 focus:ring-4 focus:ring-violet-100',
      'dark:placeholder-zinc-300 dark:text-zinc-200 outline-none',
      'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20'
    )}>
      <Select.Value className='text-black' placeholder={placeholder}/>
      <Select.Icon>
        <ChevronDown className='size-5 text-zinc-500' />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content sideOffset={8} side="bottom" position="popper" className="animate-slideDownAndFade overflow-hidden z-10 rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width] shadow-sm dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100 ">
        <Select.Viewport >
          {children}
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root> 
  )
}
