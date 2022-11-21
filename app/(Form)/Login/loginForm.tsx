import BaseForm from '../baseForm'

export default function LoginForm() {
  return (
    <div className='form-wrapper flex flex-col bg-neutral-800 rounded-xl p-12 justify-start items-start shadow-2xl'>
      <h4 className='text-4xl font-medium mb-8'> Sign In </h4>
      <BaseForm />
    </div>
  )
}
