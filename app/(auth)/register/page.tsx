'use client';

import CustomFormField from '@/components/CustomFormField';
import SubmitButton from '@/components/SubmitButton';
import { FormFieldType } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import Link from 'next/link';

const formSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: 'Full Name is required' })
    .max(50, { message: 'Full Name must not exceed 50 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

export default function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <div className='pb-10'>
        <div className='text-3xl max-sm:text-2xl font-semibold pb-1'>
          Welcome to <span className='text-primary'>CareBridge</span>
        </div>
        <p>Book appointments with top doctors anytime, anywhere!</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name='fullName'
            label='Full Name'
          />
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name='email'
            label='Email'
          />
          <SubmitButton
            size='lg'
            text='Register'
            isLoading={false}
            className='mt-4 w-full'
          />
        </form>
      </Form>
      <p className='pt-6 text-[15px]'>
        Already have an account?
        <Link href='/login' className='text-primary pl-2'>
          Login
        </Link>
      </p>
    </>
  );
}
