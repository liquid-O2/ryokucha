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
    <div className='flex items-center flex-col mt-8'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-y-8'
        autoComplete='off'>
        <label htmlFor='uname'>Username:</label>
        <input
          type='email'
          id='uname'
          placeholder='Enter your username/email'
          {...(register('username'), { required: true })}
        />
        <label htmlFor='pwd'>Password:</label>
        <input
          type='password'
          id='pwd'
          placeholder='enter a password'
          {...register('password', {
            required: true,
          })}
        />
        <input type='submit' value='submit' />
      </form>
    </div>
  );
}
