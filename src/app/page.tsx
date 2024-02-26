import { SettingsTabs } from '@/components/SetteingsTabs.tsx';
import * as Input from '../components/Sidebar/Input'
import { Mail, UploadCloud, User } from 'lucide-react';
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
            <button type='button' className='rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50'>Cancel</button>
            <button type='submit' form='settings' className='rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700'>Save</button>
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
          <div className='flex items-start gap-5 '>
              <div className='bg-violet-50 flex size-16 items-center justify-center rounded-full'>
                <User className='size-8 text-violet-500'/>
              </div>
            
            <label htmlFor="photo" className='group flex-1 cursor-pointer flex flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500'>
              <div className='rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100'>
                <UploadCloud className='size-5 text-zinc-600 group-hover:text-violet-600' />
              </div>
              <div className='flex flex-col items-center gap-1'>
                <span className='text-sm'>
                  <span className='font-semibold text-violet-700 group-hover:underline'> 
                    Click to upload
                  </span>{' '}
                  or drag and drop
                </span>
                <span className='text-xs'>SVG, PNG, JPG OR GIF (max 800x400px)</span>
              </div>
            </label>
            <input type="file" id='photo' className='sr-only'/>


          </div>

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
            <div />

          </div>

          <div className='grid gap-3 grid-cols-form pt-5'>

            <label htmlFor="timezone" className='text-sm font-medium text-zinc-700'>Timezone</label>
            <div />

          </div>

          <div className='grid gap-3 grid-cols-form pt-5'>

            <label htmlFor="bio" className='text-sm font-medium text-zinc-700'>
              Bio
              <span className='text-sm mt-0.5 font-normal text-zinc-500 block'>
                Write a short introduction.
              </span>
            </label>
            <div />
          </div>

          <div className='grid gap-3 grid-cols-form pt-5'>
            <label htmlFor="projects" className='text-sm font-medium text-zinc-700'>
              Portifolio projects
              <span className='text-sm mt-0.5 font-normal text-zinc-500 block'>
                Share a few snippets of your work.
              </span>
            </label>
            <div />
          </div>

          <div className='flex items-center justify-end pt-5 gap-2'>
            <button type='button' className='rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50'>Cancel</button>
            <button type='submit' form='settings' className='rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700'>Save</button>
          </div>
        </form>
      </div>


      </>
  )
}
