import { LogOut } from "lucide-react";
import { Button } from "../Button/Button";

export function Profile(){
    return (
        <div className="flex items-center gap-3">
            <img src="https://github.com/jaomuro.png" 
            alt=""
            className="rounded-full size-10" />
            <div className="flex flex-col flex-1 truncate">
                <span className="text-sm font-semibold dark:text-zinc-100">Jhon Cruz</span>
                <span className=" truncate text-sm text-zinc-500 dark:text-zinc-400">jhonwcruznoc@gmail.com</span>
            </div>
            <Button type='button' variant="icon">
                <LogOut className="size-5 "/>
            </Button>
        </div>
    )
}