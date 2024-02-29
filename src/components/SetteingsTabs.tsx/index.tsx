'use client'

import * as Tabs from '@radix-ui/react-tabs';
import { TabItem } from './TabItem';
import { useState } from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';

export function SettingsTabs() {
    const [currentTab, SetCurrentTab] = useState('my-value')

    return(
        <Tabs.Root value={currentTab} onValueChange={SetCurrentTab}>
            <ScrollArea.Root type='scroll' className='w-full'>
                <ScrollArea.Viewport className='w-full overflow-x-scroll'>
                    <Tabs.List className='mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700 '>
                        <TabItem value='my-value1' title='My details' isSelected={currentTab === 'my-value1'} />
                        <TabItem value='my-value2' title='Profile' isSelected={currentTab === 'my-value2'} />
                        <TabItem value='my-value3' title='Password' isSelected={currentTab === 'my-value3'} />
                        <TabItem value='my-value4' title='Team' isSelected={currentTab === 'my-value4'} />
                        <TabItem value='my-value5' title='Plan' isSelected={currentTab === 'my-value5'} />
                        <TabItem value='my-value6' title='Billing' isSelected={currentTab === 'my-value6'} />
                        <TabItem value='my-value7' title='Email' isSelected={currentTab === 'my-value7'} />
                        <TabItem value='my-value8' title='Notifications' isSelected={currentTab === 'my-value8'} />
                        <TabItem value='my-value9' title='Integrations' isSelected={currentTab === 'my-value9'} />
                        <TabItem value='my-value10' title='API' isSelected={currentTab === 'my-value10'} />
                    </Tabs.List>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className='flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100' orientation='horizontal'>
                    <ScrollArea.Thumb className='relative flex-1 rounded-lg bg-zinc-300' />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>
        </Tabs.Root>
    )
}