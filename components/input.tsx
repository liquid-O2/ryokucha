import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className: string
  type: string
  placeholder: string
  customAttr: any
}

const Input = ({ className, type, placeholder, customAttr, value }: InputProps) => {
  return (
    <input
      className={`pr-4 pl-11 py-3 rounded-lg border-2 bg-neutral-700 text-neutral-200 w-full lg:w-auto max-w-none ${className}`}
      type={type}
      placeholder={placeholder}
      {...customAttr}
      value={value}
    />
  )
}

export default Input
