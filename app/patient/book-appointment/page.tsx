import Doctor from '@/components/Doctor';

export default function BookAppointment() {
  return (
    <div className='padX pt-8 max-sm:pt-6'>
      <div className='text-lg max-sm:text-base font-semibold mb-2'>
        Recommended Doctors
      </div>
      <div className='grid grid-cols-3 max-xl:grid-cols-2 gap-6'>
        <Doctor />
        <Doctor />
        <Doctor />
        <Doctor />
      </div>
    </div>
  );
}
