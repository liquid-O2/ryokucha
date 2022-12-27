export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`max-w-[2000px] m-auto px-6    w-full ${className}`}>{children}</div>
}
