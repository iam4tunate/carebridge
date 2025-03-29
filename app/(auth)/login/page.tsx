'use client';

import CustomFormField from '@/components/CustomFormField';
import SubmitButton from '@/components/SubmitButton';
import { FormFieldType } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import Link from 'next/link';
import Image from 'next/image';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <div className='pb-10'>
        <div className='pb-4 text-primary mx-auto w-fit flex items-end gap-x-1'>
          <Image
            src='/images/logo_icon_blue.svg'
            alt='logo'
            width={20}
            height={20}
          />
          <span className='font-semibold'>CareBridge</span>
        </div>
        <div className='text-3xl max-sm:text-2xl font-semibold pb-1'>
          Welcome to Back!
        </div>
        <p>Enter your email to log in. We’ll send you a secure OTP.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name='email'
            label='Email'
          />
          <SubmitButton
            size='lg'
            text='Login'
            isLoading={false}
            className='mt-4 w-full'
          />
        </form>
      </Form>
      <p className='pt-6 text-[15px]'>
        Don&apos;t have an account yet?
        <Link href='/register' className='text-primary pl-2'>
          Register
        </Link>
      </p>
    </>
  );
}
