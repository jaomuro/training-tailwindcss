import { LogOut } from "lucide-react";

export function Profile(){
    return (
        <div className="flex items-center gap-3">
            <img src="https://github.com/jaomuro.png" 
            alt=""
            className="rounded-full size-12" />
            <div className="flex flex-col flex-1">
                <span className="text-sm font-semibold">Jhon Cruz</span>
                <span className="text-sm text-zinc-500">dadada dad asd asd jhonwcruznoc@gmail.com</span>
            </div>
            <button type='button' className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
                <LogOut className="size-5 text-zinc-500 "/>
            </button>
        </div>
    )
}