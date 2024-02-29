
import { SettingsTabs } from '@/components/SetteingsTabs.tsx';
import * as Input from '../components/Sidebar/Input'
import { Bold, Italic, Link, List, ListOrdered, Mail} from 'lucide-react';
import * as FileInput from '../components/FileInput'
import { SelectInput } from '../components/SelectInput.tsx'
import { Item } from '@/components/SelectInput.tsx/item';
import { TextArea } from '@/components/TextArea';
import { Button } from '@/components/Button/Button';

export default function Home() {
  return (
      <>
      <h1 className="font-medium text-zinc-900 text-2xl">Settings</h1>
      <SettingsTabs />

      <div className='mt-6  flex flex-col'>

        <div className='flex items-center justify-between border-b border-zinc-200 pb-5'>

          <div className='space-y-1'>
            <h2 className='text-lg font-medium text-zinc-900'>Personal info</h2>
            <p className='text-sm text-zinc-500'>Update your photo and personal details here.</p>
          </div>

          <div className='flex items-center gap-2'>
            <Button variant='outline' type='button' >Cancel</Button>
            <Button variant='primary' type='submit' form='settings' >Save</Button>
          </div>

        </div>

        <form id='settings' className='mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200'>
          <div className='grid gap-3 grid-cols-form'>

            <label htmlFor="firstName" className='text-sm font-medium text-zinc-700'>Name</label>

            <div className='grid gap-6 grid-cols-2'>
              <Input.Root>
                <Input.Control id='firstName' defaultValue='Jhon'></Input.Control>
              </Input.Root>
              <Input.Root>
                <Input.Control defaultValue='Cruz'></Input.Control>
              </Input.Root>
            </div>

            <div />

          </div>

          <div className='grid gap-3 grid-cols-form pt-5'>

            <label htmlFor="email" className='text-sm font-medium text-zinc-700'>Email address</label>

              <Input.Root>
              <Input.Prefix >
              <Mail  className='size-5 text-zinc-500'/>
              </Input.Prefix>
                <Input.Control type='email' id='email' defaultValue='jhon@seatelecom.com.br'></Input.Control>
              </Input.Root>


            <div />

          </div>

          <div className='grid gap-3 grid-cols-form pt-5'>

          <label htmlFor="photo" className='text-sm font-medium text-zinc-700'>
            Your photo
            <span className='text-sm mt-0.5 font-normal text-zinc-500 block'>This will be displayed on your profile.</span>
          </label>   
            <FileInput.Root className='flex items-start gap-5'>
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          <div />

          </div>

          <div className='grid gap-3 grid-cols-form pt-5'>

            <label htmlFor="role" className='text-sm font-medium text-zinc-700'>Role</label>
              <Input.Root>
                <Input.Control type='text' id='role' defaultValue='Dev'></Input.Control>
              </Input.Root>
            <div />

          </div>

          <div className='grid gap-3 grid-cols-form pt-5'>

            <label htmlFor="country" className='text-sm font-medium text-zinc-700'>Country</label>
            <SelectInput placeholder='Select a country...'>
              <Item value='br' text='Brasil'/>
              <Item value='cn' text='Canadá'/>
              <Item value='eua' text='EUA'/>
              <Item value='ch' text='China'/>
            </SelectInput>
          </div>

          <div className='grid gap-3 grid-cols-form pt-5'>

            <label htmlFor="timezone" className='text-sm font-medium text-zinc-700'>Timezone</label>
            <SelectInput placeholder='Select a timezone...'>
              <Item value='utc' text='Pacific Standart Time (UTC-08:00)'/>
              <Item value='br' text='South America Time (UTC-03:00)'/>
            </SelectInput>


          </div>

          <div className='grid gap-3 grid-cols-form pt-5'>

            <label htmlFor="bio" className='text-sm font-medium text-zinc-700'>
              Bio
              <span className='text-sm mt-0.5 font-normal text-zinc-500 block'>
                Write a short introduction.
              </span>
            </label>
            <div className='space-y-3'>

              <div className='grid gap-3 grid-cols-2 '>
                <SelectInput placeholder='' defaultValue='txt'>
                  <Item value='txt' text='Normal Text'/>
                  <Item value='md' text='Markdown'/>
                </SelectInput>

                <div className='flex items-center gap-1'>
                  <Button type='button' variant='icon'>
                    <Bold strokeWidth={3} className="size-4 text-zinc-500"/>
                  </Button>
                  <Button type='button' variant='icon'>
                    <Italic strokeWidth={3} className="size-4 text-zinc-500"/>
                  </Button>
                  <Button type='button' variant='icon'>
                    <Link strokeWidth={3} className="size-4 text-zinc-500"/>
                  </Button>
                  <Button type='button' variant='icon'>
                    <List strokeWidth={3} className="size-4 text-zinc-500"/>
                  </Button>
                  <Button type='button' variant='icon'>
                    <ListOrdered strokeWidth={3} className="size-4 text-zinc-500 "/>
                  </Button>
                </div>

                
              </div>
              <TextArea id="bio"
              defaultValue='Im a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development' />

            </div>
          </div>

          <div className='grid gap-3 grid-cols-form pt-5'>
            <label htmlFor="projects" className='text-sm font-medium text-zinc-700'>
              Portifolio projects
              <span className='text-sm mt-0.5 font-normal text-zinc-500 block'>
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root className='gap-5'>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple/>
            </FileInput.Root>
          </div>

          <div className='flex items-center justify-end pt-5 gap-2'>
            <Button variant='outline' type='button'>Cancel</Button>
            <Button variant='primary' type='submit' form='settings'>Save</Button>
          </div>
        </form>
      </div>


      </>
  )
}
