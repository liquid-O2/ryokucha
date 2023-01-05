const Loader = () => {
  return (
    <div className=' flex justify-center items-center w-screen h-screen gap-2'>
      <div className='rounded-full overflow-hidden w-[50%] h-6 bg-gray-300  opacity-60 '>
        <div className='loading  h-full  bg-neon-dark'></div>
      </div>
    </div>
  )
}

export default Loader
