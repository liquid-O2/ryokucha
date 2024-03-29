export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <section className={`m-auto w-full max-w-[2000px]  px-6 md:px-12 ${className}`}>{children}</section>
}
