'use client'

import * as Tabs from '@radix-ui/react-tabs';
import { TabItem } from './TabItem';
import { useState } from 'react';

export function SettingsTabs() {
    const [currentTab, SetCurrentTab] = useState('my-value')

    return(
        <Tabs.Root value={currentTab} onValueChange={SetCurrentTab}>
        <Tabs.List className='mt-6 flex w-full items-center gap-4 border-b border-zinc-200 '>
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
      </Tabs.Root>
    )
}