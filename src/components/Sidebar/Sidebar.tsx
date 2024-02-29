'use client'

import { UsedSpaceWidget } from "../UsedSpaceWidget";
import { MainNav } from "./MainNavegation";
import { NavItem } from "./MainNavegation/NavItem";
import { Profile } from "./Profile";
import { Logo } from "./logo";
import { Cog, LifeBuoy, Menu, Search } from "lucide-react";
import * as Input from './Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from "../Button/Button";

export function Sidebar() {
    return (
        <Collapsible.Root className="border-b border-zinc-200 p-4 flex flex-col gap-6 fixed left-0 top-0 right-0 z-20 data-[state=open]:bottom-0 lg:data-[state=closed]:bottom-0 bg-white lg:right-auto lg:w-80 lg:border-r lg:py-8 lg:px-5">

        <div className="flex items-center justify-between">
            <Logo />
            <Collapsible.Trigger asChild className="lg:hidden">
                <Button variant="icon">
                    <Menu className="size-6"/>
                </Button>
            </Collapsible.Trigger>
        </div>

        <Collapsible.Content forceMount className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex" >

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

        </Collapsible.Content>
            
        </Collapsible.Root>
    );
}
