import {ChevronLeft, ChevronRight, Play} from 'lucide-react'

import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar/>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>

            <button className='bg-black/40 rounded-full p-1'>
              <ChevronLeft />
            </button>

            <button className='bg-black/40 rounded-full p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold mt-10 text-3xl'>Good Afternoon</h1>

          <div className='grid grid-cols-3 mt-4 gap-6'>

            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpeg" width={104} height={104} alt='Capa do album' />
              <strong>Waisting Light</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpeg" width={104} height={104} alt='Capa do album' />
              <strong>Waisting Light</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpeg" width={104} height={104} alt='Capa do album' />
              <strong>Waisting Light</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpeg" width={104} height={104} alt='Capa do album' />
              <strong>Waisting Light</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpeg" width={104} height={104} alt='Capa do album' />
              <strong>Waisting Light</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpeg" width={104} height={104} alt='Capa do album' />
              <strong>Waisting Light</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold mt-10 text-2xl'>Made for Hiago Maitan</h2>

          <div className='grid grid-cols-5 gap-4 mt-4'>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image className='w-full' src="/album.jpeg" width={120} height={120} alt='Capa do album' />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN girls in red and more</span>
              
            </a>

            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image className='w-full' src="/album.jpeg" width={120} height={120} alt='Capa do album' />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN girls in red and more</span>
            </a>

            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image className='w-full' src="/album.jpeg" width={120} height={120} alt='Capa do album' />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN girls in red and more</span>
            </a>

            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image className='w-full' src="/album.jpeg" width={120} height={120} alt='Capa do album' />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN girls in red and more</span>
            </a>

            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image className='w-full' src="/album.jpeg" width={120} height={120} alt='Capa do album' />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN girls in red and more</span>
            </a>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  )
}
