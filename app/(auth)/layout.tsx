import Image from 'next/image';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative grid grid-cols-2 max-lg:grid-cols-1 h-[100dvh]'>
      <img
        src='/images/specialists.png'
        alt=''
        className='max-lg:hidden absolute bottom-0 w-[55%] h-auto object-cover z-20 overflow-visible'
      />
      <div
        style={{ background: `url(/images/authBg.svg)` }}
        className='relative h-full bg-cover bg-no-repeat max-lg:hidden'>
        <Image
          src='/images/appoinment-blur.png'
          alt='book appointment note'
          height={200}
          width={200}
          className='absolute bottom-28 right-16 w-auto h-auto z-30'
        />
        <Image
          src='/images/qualified-blur.png'
          alt='search doctor note'
          height={250}
          width={250}
          className='absolute top-10 left-8 w-auto h-auto'
        />
      </div>
      <main className='flex items-center'>
        <div className='padX w-[80%] max-md:w-[80%] max-lg:w-[60%] max-sm:w-full mx-auto text-center'>
          {children}
        </div>
      </main>
    </div>
  );
}
