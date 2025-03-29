import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Logo({ className }: { className: string }) {
  return (
    <div className={cn('text-primary flex items-center gap-x-1', className)}>
      <Image
        src='/images/logo_icon_blue.svg'
        alt='logo'
        width={20}
        height={20}
      />
      <span>CareBridge</span>
    </div>
  );
}
