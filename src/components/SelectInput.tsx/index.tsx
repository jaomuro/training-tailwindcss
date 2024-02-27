'use client'
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";


export function SelectInput() {
  return(
    <Select.Root>
    <Select.Trigger className='flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-500'>
      <Select.Value className='text-black' placeholder="Select a country..."/>
      <Select.Icon>
        <ChevronDown className='size-5 text-zinc-500' />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content sideOffset={8} side="bottom" position="popper" className="overflow-hidden z-10 rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width]">
        <Select.Viewport >
          <Select.Item value="br" className="flex justify-between items-center gap-2 py-2.5 px-3 outline-none data-[highlighted]:bg-zinc-50">
            <Select.ItemText className="text-black">
              Brasil
            </Select.ItemText>
            <Select.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </Select.ItemIndicator>
          </Select.Item>
          <Select.Item value="es" className="flex justify-between items-center gap-2 py-2.5 px-3 outline-none data-[highlighted]:bg-zinc-50">
            <Select.ItemText className="text-black">
              Espanha
            </Select.ItemText>
              <Select.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </Select.ItemIndicator>
          </Select.Item>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root> 
  )
}
