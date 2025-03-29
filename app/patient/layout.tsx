import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-[100dvh] relative grid grid-cols-[230px_1fr] max-lg:grid-cols-[5rem_1fr] max-sm:grid-cols-1 h-full'>
      <div className='max-w-[230px] max-lg:max-w-[5rem] max-sm:hidden'>
        <Sidebar />
      </div>
      <div className='relative w-full container mx-0 p-0'>
        <Header />
        <main className='mb-12 pb-12 relative'>{children}</main>
        <div className='absolute bottom-0 left-0 right-0 w-full border-t border-input'>
          <Footer />
        </div>
      </div>
    </div>
  );
}
