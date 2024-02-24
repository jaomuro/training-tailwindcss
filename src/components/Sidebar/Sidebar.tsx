import { UsedSpaceWidget } from "../UsedSpaceWidget";
import { MainNav } from "./MainNavegation";
import { NavItem } from "./MainNavegation/NavItem";
import { Profile } from "./Profile";
import { Logo } from "./logo";
import { Cog, LifeBuoy, Search } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="border-r border-zinc-200 px-5 py-8 flex flex-col gap-6">
            <Logo />

            <div className="flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
                <Search className="h-5 text-zinc-500"></Search>
                <input className="flex-1 outline-none border-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600" placeholder="Search..." type="text" />
            </div>
            <MainNav />

            <div className="mt-auto flex flex-col gap-6">
                <nav className="space-y-0.5"></nav>
                <NavItem title="Support" icon={LifeBuoy}/>
                <NavItem title="Settings" icon={Cog}/>
            </div>

            <UsedSpaceWidget />
            <div className="h-px bg-zinc-200"></div>
            <Profile />
        </aside>
    );
}
