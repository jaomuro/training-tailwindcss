'use client'
import * as Select from "@radix-ui/react-select";
import {  ChevronDown } from "lucide-react";
import { Item } from "./item";
import { ReactNode } from "react";

export interface SelectInputProps extends Select.SelectProps{
  children: ReactNode
  placeholder: string
}

export function SelectInput({children, placeholder, ...props}: SelectInputProps) {
  return(
    <Select.Root {...props}>
    <Select.Trigger className='flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-500 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100'>
      <Select.Value className='text-black' placeholder={placeholder}/>
      <Select.Icon>
        <ChevronDown className='size-5 text-zinc-500' />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content sideOffset={8} side="bottom" position="popper" className="animate-slideDownAndFade overflow-hidden z-10 rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width] shadow-sm">
        <Select.Viewport >
          {children}
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root> 
  )
}
