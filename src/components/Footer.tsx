import {
  Play,
  Heart,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  Laptop2,
  LayoutList,
  Volume,
  Maximize2
} from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-4 flex items-center justify-between">
      <div className='flex items-center gap-3'>
        <Image className='rounded' src="/album.jpeg" width={56} height={56} alt='Capa do album' />

        <div className='flex flex-col'>
          <strong className='font-normal'>Rope</strong>
          <span className='text-xs text-zinc-400'>Foo Fighters</span>
        </div>

        <Heart size={20} className="text-green-500" />
      </div>

      <div className='flex flex-col items-center gap-2'>
        <div className='flex items-center gap-4'>
          <Shuffle size={20} className="text-green-500" />
          <SkipBack size={20} className="text-zinc-300 hover:text-zinc-50" />

          <div className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-zinc-200 text-zinc-800 hover:bg-zinc-50'>
            <Play />
          </div>

          <SkipForward size={20} className="text-zinc-300 hover:text-zinc-50" />
          <Repeat size={20} className="text-zinc-300 hover:text-zinc-50" />
        </div>

        <div className='flex items-center gap-2'>
          <span className='text-xs text-zinc-400'>0:31</span>

          <div className='h-1 w-96 rounded bg-zinc-500'>
            <div className='h-1 w-36 group rounded flex items-center justify-center bg-zinc-300 hover:bg-green-500'>
              <div className='w-3 h-3 rounded-full bg-white ml-auto invisible group-hover:visible' />
            </div>
          </div>

          <span className='text-xs text-zinc-400'>2:14</span>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <Mic2 className="text-zinc-200 cursor-pointer" size={20} />
        <LayoutList className="text-zinc-200 cursor-pointer" size={20} />
        <Laptop2 className="text-zinc-200 cursor-pointer" size={20} />

        <div className='flex items-center gap-2'>
          <Volume className="text-zinc-200 cursor-pointer" size={20} />
          <div className='h-1 w-24 rounded bg-zinc-500'>
            <div className='h-1 w-10 rounded group bg-zinc-300 flex items-center justify-center hover:bg-green-500'>
              <div className='w-3 h-3 rounded-full bg-white ml-auto invisible group-hover:visible' />
            </div>
          </div>
        </div>

        <Maximize2 className="text-zinc-200 cursor-pointer" size={20} />
      </div>
    </footer>
  )
}