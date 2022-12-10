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
      className={`pr-4 pl-11 py-3 rounded-2xl border-2 focus:border-green-900 focus:border-2 bg-green-50 text-green-900  w-full lg:w-auto ${className}`}
      type={type}
      placeholder={placeholder}
      {...customAttr}
      value={value}
    />
  )
}

export default Input
