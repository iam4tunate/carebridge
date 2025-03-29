import {
  ArrowLeft,
  Clock,
  Stethoscope,
  Wallet,
} from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export default function Doctor() {
  return (
    <div className='border border-input rounded-md p-4'>
      <div className='flex items-center gap-x-3'>
        <img
          src='/images/doctor.png'
          alt=''
          className='object-contain w-auto h-fit'
        />
        <div className=''>
          <div className='font-medium'>Fortunate Ogodu</div>
          <p className='flex items-center gap-x-3 text-sm pt-1 pb-2'>
            <span>Specialist</span>
            <Separator orientation='vertical' className='h-3 bg-primary/20' />
            <span>7 years experience</span>
          </p>
          <p className='bg-primary/20 w-fit py-[2px] px-2 rounded text-[13px]'>
            Dentist
          </p>
        </div>
      </div>
      <Separator orientation='horizontal' className='my-3' />
      <div className='flex items-center justify-between pt-3 pb-5 text-sm'>
        <div className='flex items-start gap-x-1.5'>
          <div className='p-1 rounded-full  bg-secondary border border-inpu'>
            <Clock size={20} className='opacity-90' />
          </div>
          <p className='flex flex-col'>
            <span>Mon - Fri</span>
            <span className='opacity-80 text-[13px]'>9am - 4pm</span>
          </p>
        </div>
        <Separator orientation='vertical' className='h-10' />
        <div className='flex items-start gap-x-1.5'>
          <div className='p-1 rounded-full bg-secondary border border-input'>
            <Wallet size={20} className='opacity-90' />
          </div>
          <p className='flex flex-col'>
            <span className='font-medium'>₦500</span>
            <span className='opacity-80 text-[13px]'>per minute</span>
          </p>
        </div>
      </div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className='w-full text-base'>Book an appointment</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className='min-w-[70%] max-lg:min-w-[80%] max-md:min-w-[90%] max-sm:min-w-full'>
          {/* <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader> */}
          <div className='grid grid-cols-2 px-3'>
            <div className=''>
              <div className='p-1.5 rounded-full border border-input w-fit cursor-pointer mb-6'>
                <ArrowLeft size={23} />
              </div>
              <div className=''>
                <div className='flex items-center gap-x-3'>
                  <Stethoscope size={20} />
                  <p>Dr. Fortunate Ogodu</p>
                </div>
              </div>
            </div>
            <div className=''></div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
