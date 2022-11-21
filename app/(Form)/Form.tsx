'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
type Inputs = {
  username: string;
  password: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <div className='flex items-center flex-col mt-8'>
        <form
          onSubmit={() => handleSubmit(onSubmit)}
          className='flex flex-col gap-y-8'>
          <input
            placeholder={'Enter your username/email'}
            defaultValue={'Enter your username/email'}
            {...(register('username'), { required: true })}
          />
          <input
            placeholder={'enter a password'}
            defaultValue={'Enter your password'}
            {...register('password', {
              required: true,
            })}
          />
          {errors.password ? (
            <span className='text-red-900'>Password error</span>
          ) : null}
          <input type='submit' />
        </form>
      </div>
    </>
  );
}
