export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative grid grid-cols-2 h-[100dvh]'>
      <img
        src='/images/specialists.png'
        alt=''
        className='absolute top-0 w-auto h-auto object-cover z-20 overflow-visible'
      />
      <div
        style={{ background: `url(/images/authBg.svg)` }}
        className='h-full bg-cover bg-no-repeat'></div>
      <main className='flex items-center'>{children}</main>
    </div>
  );
}
