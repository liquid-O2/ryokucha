import '../styles/globals.css'

const Section = ({ children, full, className }: { children: React.ReactNode; full?: boolean; className?: string }) => {
  return (
    <section
      className={`${full ? '' : ' py-20 md:py-32 rounded-3xl md:rounded-[3rem]'} w-screen ${className} bg-background`}>
      {children}
    </section>
  )
}

export default Section
