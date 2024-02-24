import { UsedSpaceWidget } from "../UsedSpaceWidget";
import { MainNav } from "./MainNavegation";
import { NavItem } from "./MainNavegation/NavItem";
import { Profile } from "./Profile";
import { Logo } from "./logo";
import { Cog, LifeBuoy, Search } from "lucide-react";
import * as Input from './Input'

export function Sidebar() {
    return (
        <aside className="border-r border-zinc-200 px-5 py-8 flex flex-col gap-6">
            <Logo />
                {/* <Search className="h-5 text-zinc-500"></Search> */}

            <Input.Root>
                <Input.Prefix>
                        <Search className="h-5 text-zinc-500" />
                    </Input.Prefix>
                <Input.Control placeholder="Search"/>
            </Input.Root>
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
