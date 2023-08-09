import { Home as HomeIcon, Search, Library, Plus, ArrowRight } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-72 bg-black p-2">
      <div className='flex items-center gap-2'>
        <div className='w-1 h-1 bg-gray-300 rounded-full' />
        <div className='w-1 h-1 bg-gray-300 rounded-full' />
        <div className='w-1 h-1 bg-gray-300 rounded-full' />
      </div>

      <nav className="space-y-5 mt-2 bg-zinc-900 rounded-md py-4 pl-4">
        <a href="" className="flex items-center gap-3 text-base font-bold text-zinc-400 hover:text-zinc-200">
          <HomeIcon />
          Início
        </a>

        <a href="" className="flex items-center gap-3 text-base font-bold text-zinc-400 hover:text-zinc-200">
          <Search />
          Buscar
        </a>
      </nav>

      <nav className='h-full mt-2 flex flex-col gap-3 bg-zinc-900 rounded-md py-4 px-4 '>
        <div className='flex justify-between text-zinc-400'>
          <a href="" className="flex items-center gap-3 text-base font-bold text-zinc-400 hover:text-zinc-200">
            <Library />
            Sua Biblioteca
          </a>
          <a href="" className='p-0.5 rounded-full hover:bg-zinc-800 hover:text-zinc-200'>
            <Plus />
          </a>
          <a href="" className='p-0.5 rounded-full hover:bg-zinc-800 hover:text-zinc-200'>
            <ArrowRight />
          </a>
        </div>

        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Hits Brasil</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Aniver Funk</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>My Playlist #13</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Top Brasil</a>
      </nav>
    </aside>
  )
}