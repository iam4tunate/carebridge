import Image from 'next/image';

export default function page() {
  return (
    <div className='bg-secondary p-32'>
      <Image src='/images/logo-white.svg' alt='logo' height={150} width={150} />
      <p className='text-7xl font-bold bg-primary'>Lorem ipsum dolor sit.</p>
      <p className=''>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laudantium
        quo minima vel totam numquam ipsum nam libero natus velit optio cum
        reprehenderit, doloremque ea neque laboriosam voluptatibus sint error
        rerum eveniet. Rem sapiente illo non voluptatibus eius quos alias modi
        quis dolorum placeat. Placeat, voluptates ipsum voluptate molestias
        tenetur doloremque quasi officia nam obcaecati natus, error fugiat sit
        rem?
      </p>
    </div>
  );
}
