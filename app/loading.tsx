const Loader = () => {
  return (
    <div className=' flex h-screen w-screen items-center justify-center gap-2'>
      <div className='h-4 w-[50%] overflow-hidden rounded-full bg-stone-300  opacity-60 '>
        <div className='loading  h-full  bg-neon-dark'></div>
      </div>
    </div>
  )
}

export default Loader
