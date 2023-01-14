import '../styles/globals.css'

const Section = ({ children, full, className }: { children: React.ReactNode; full?: boolean; className?: string }) => {
  return (
    <section
      className={`${
        full ? '' : 'mb-2 rounded-3xl py-24 md:rounded-[3rem] md:py-32 min-[2000px]:py-36'
      } w-screen ${className} bg-background`}>
      {children}
    </section>
  )
}

export default Section
