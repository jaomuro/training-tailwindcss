import { Logo } from "./logo";
import { Search } from "lucide-react";
export function Sidebar() {
    return (
    <aside className="border-r border-zinc-200 px-5 py-8 space-y-6">
        <Logo />

        <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 text-zinc-500"></Search>
        <input className="flex-1 outline-none border-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600" placeholder="Search..." type="text" />
        </div>
    </aside>
    )
}