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
      className={`pr-4 pl-11 py-3 rounded-xl border-2 focus:border-primary focus:border-2 bg-background text-primary  w-full lg:w-auto ${className}`}
      type={type}
      placeholder={placeholder}
      {...customAttr}
      value={value}
    />
  )
}

export default Input
