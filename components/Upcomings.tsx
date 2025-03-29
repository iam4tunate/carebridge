'use client';

import { CalendarX } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Upcomings() {
  return (
    <div className=''>
      <div className='text-lg max-sm:text-base font-semibold mb-2'>
        Upcoming Appointments
      </div>
      <ScrollArea className='h-[300px] relative border-2 border-primary/60 dark:border-primary/20 border-dashed max-h-[288px] w-full rounded-md'>
        <div className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2  text-center w-full padX'>
          <CalendarX size={40} className='text-primary mx-auto' />
          <p className='pt-3 pb-2 text-lg font-medium opacity-90'>
            No Upcoming Appointments
          </p>
          <p className='opacity-90'>
            You haven&apos;t booked any appointment yet
          </p>
          <Link href='/patient/book-appointment'>
            <Button size='lg' className='mt-3 text-base'>
              Book Now
            </Button>
          </Link>
        </div>
      </ScrollArea>
    </div>
  );
}
