'use client';

import { Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';

export default function Header() {
  const { setTheme } = useTheme();
  return (
    <header className='w-full border-b py-3 padX flex items-center justify-between'>
      <Image
        src='/images/logo_icon_blue.svg'
        alt='logo'
        width={20}
        height={20}
        className='w-[25px] sm:hidden'
      />
      <p className='font-medium opacity-85 max-sm:hidden'>
        Good afternoon, Fortunate 👋🏼
      </p>
      <div className='flex items-center gap-x-4'>
        <div className='flex items-center gap-x-1.5 capitalize border border-input rounded-full p-1.5 bg-accent'>
          <figure className='relative aspect-square h-8 w-8 max-sm:w-7 max-sm:h-7'>
            <Image
              fill
              src='/images/passport.jpg'
              alt='user'
              className='rounded-full object-cover'
            />
          </figure>
          {/* <p className='whitespace-nowrap text-sm opacity-90'>Fortunate</p> */}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' size='icon'>
              <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
              <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
              <span className='sr-only'>Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem onClick={() => setTheme('light')}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
