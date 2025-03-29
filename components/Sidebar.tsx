'use client';

import { patientsNav } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { LogOut } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className='max-sm:hidden transition-all max-w-[230px] max-lg:max-w-[5rem] fixed max-lg:relative w-full h-full left-0 top-0 bottom-0 border-r border-input'>
      <div className='py-[21px] px-6 text-primary flex items-end gap-x-1'>
        <Image
          src='/images/logo_icon_blue.svg'
          alt='logo'
          width={20}
          height={20}
          className='max-lg:w-[25px]'
        />
        <span className='max-lg:hidden font-semibold'>CareBridge</span>
      </div>
      <div className='px-2 max-lg:px-0 max-lg:w-fit max-lg:mx-auto pt-8'>
        <ul className='space-y-4 max-lg:space-y-5'>
          {patientsNav.map((link, i) => (
            <Link
              href={link.url}
              key={i}
              className={cn(
                'flex items-center gap-x-3 rounded-sm max-lg:rounded-md py-3 px-3',
                pathname === link.url
                  ? 'text-primary bg-accent'
                  : 'hover:bg-accent dark:hover:bg-accent/50'
              )}>
              <TooltipProvider>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger asChild>
                    <link.icon size={23} />
                  </TooltipTrigger>
                  <TooltipContent
                    side='right'
                    className='ml-1.5 bg-[#010816] dark:bg-white lg:hidden'>
                    <p className='text-sm font-medium'>{link.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className='capitalize max-lg:hidden'>{link.label}</span>
            </Link>
          ))}
          <li className='hover:bg-accent dark:hover:bg-accent/50 cursor-pointer py-3 px-3 flex items-center gap-x-3 rounded-sm max-lg:rounded-md'>
            <TooltipProvider>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <LogOut size={23} />
                </TooltipTrigger>
                <TooltipContent
                  side='right'
                  className='ml-1.5 bg-red-500 text-white lg:hidden'>
                  <p className='text-sm font-medium'>Log out</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span className='max-lg:hidden'>Log out</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
