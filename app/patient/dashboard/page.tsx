import Upcomings from '@/components/Upcomings';
import Image from 'next/image';
import 'react-datepicker/dist/react-datepicker.css';

export default function Dashboard() {
  return (
    <div className='padX pt-8 max-sm:pt-6'>
      <p className='font-medium opacity-85 sm:hidden pb-2'>
        Good afternoon, Fortunate 👋🏼
      </p>
      <div className='flex items-end justify-between relative h-[14rem]  max-xl:h-full bg-primary w-full rounded-lg px-6 max-sm:px-4'>
        <div className='self-center w-[60%] max-xl:w-[80%] max-lg:w-[90%] max-md:w-full text-white py-6'>
          <div className='text-3xl max-md:text-2xl font-semibold leading-9'>
            Connect with top specialists effortlessly from the comfort your
            home.
          </div>
          <p className='pt-2 pb-4 max-sm:pb-2 text-[15px]'>
            Seamless and secure healthcare at your fingertips.
          </p>
          <div className='flex flex-wrap gap-y-0.5 items-center gap-x-1.5'>
            <Image
              src='/images/avatars.png'
              alt='doctors avatars'
              height={70}
              width={70}
              className='object-cover max-sm:hidden'
            />
            <span className='opacity-90 text-sm italic'>
              Over 15 top-rated doctors available for you
            </span>
          </div>
        </div>
        <div>
          <Image
            src='/images/ellipse.png'
            alt='ellipse'
            height={200}
            width={200}
            className='max-sm:w-[170px] max-sm:h-[150px] absolute bottom-0 right-0'
          />
          <img
            src='/images/doctors_on_mask.png'
            alt=''
            className='w-[85%] ml-auto max-xl:hidden'
          />
        </div>
      </div>
      <div className='mt-12'>
        <Upcomings />
      </div>
    </div>
  );
}
