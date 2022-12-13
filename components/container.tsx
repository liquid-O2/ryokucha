export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`max-w-[2400px] m-auto px-5 md:px-12 w-full ${className}`}>{children}</div>
}
