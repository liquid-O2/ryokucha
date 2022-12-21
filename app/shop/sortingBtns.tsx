import { Dispatch, SetStateAction, useState } from 'react'
import { Teas } from '../../components/contextProvider'
import { ChevronDown, Heart, Link, LogOut } from 'react-feather'
import { AnimatePresence, motion } from 'framer-motion'

const SortBtns = ({ setTeas }: { setTeas: Dispatch<SetStateAction<Teas[]>> }) => {
  const [btnState, setBtnState] = useState({ first: true, second: false, third: false })
  const [selectIsOpen, setSelectIsOpen] = useState(false)

  const sortArray = (array: any, property: string, isDescending: boolean) => {
    return [...array].sort((a, b) => {
      if (a[property] < b[property]) {
        return isDescending ? 1 : -1
      }
      if (a[property] > b[property]) {
        return isDescending ? -1 : 1
      }
      return 0
    })
  }

  const handleFilter = (filterCriteria: string, btnType: string) => {
    if (filterCriteria === 'alphabetical') {
      setTeas((teas) => sortArray(teas, 'name', false))
      setBtnState({ first: true, second: false, third: false })
    }
    if (filterCriteria === 'price' && btnType === 'second') {
      setTeas((teas) => sortArray(teas, 'price', true))
      setBtnState({ first: false, second: true, third: false })
    }
    if (filterCriteria === 'price' && btnType === 'third') {
      setTeas((teas) => sortArray(teas, 'price', false))
      setBtnState({ first: false, second: false, third: true })
    }
  }

  return (
    <div className='relative w-full'>
      <div className='max-[643px]:text-sm flex-wrap  sorting-section  w-full justify-end gap-4 hidden md:flex  '>
        <button
          onClick={() => handleFilter('alphabetical', 'first')}
          className={`max-[596px]:px-3 max-[596px]:py-1 px-6 py-3 rounded-full border  border-primary/30 ${
            btnState.first && 'bg-primary text-background'
          }`}>
          Alphabetical
        </button>
        <button
          onClick={() => handleFilter('price', 'second')}
          className={`max-[596px]:px-3 max-[596px]:py-1 px-6 py-3 rounded-full border border-primary/30 ${
            btnState.second && 'bg-primary text-background'
          }`}>
          Price - High to Low
        </button>
        <button
          onClick={() => handleFilter('price', 'third')}
          className={`max-[596px]:px-3 max-[596px]:py-1 px-6 py-3 rounded-full border border-primary/30 ${
            btnState.third && 'bg-primary text-background'
          }`}>
          Price - Low to High
        </button>
      </div>
      <div className='md:hidden flex justify-end items-center w-full'>
        <button
          className='flex justify-center items-center gap-2 px-6 py-3 rounded-full border border-primary/30'
          onClick={() => setSelectIsOpen(!selectIsOpen)}>
          Sort by
          <div
            className={
              selectIsOpen
                ? 'rotate-180 transition-transform ease-in duration-200'
                : 'rotate-0 transition-transform ease-out duration-200'
            }>
            <ChevronDown />
          </div>
        </button>
        <div className='md:hidden overflow-hidden z-50 mt-4 absolute top-full right-0  rounded-3xl'>
          <AnimatePresence initial={false}>
            {selectIsOpen && (
              <motion.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: '-100%', opacity: 0 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.3 }}
                className=' gap-3 z-50  rounded-3xl w-[296px] shadow-md m-2 shadow-primary-dark/10  bg-background flex flex-col justify-start items-start px-6 py-4'>
                <button
                  onClick={() => {
                    setSelectIsOpen(false)
                    handleFilter('alphabetical', 'first')
                  }}
                  className={`max-[596px]:px-3 max-[596px]:py-1 px-6 py-3 rounded-full w-full border  border-primary/30 ${
                    btnState.first && 'bg-primary text-background'
                  }`}>
                  Alphabetical
                </button>
                <button
                  onClick={() => {
                    setSelectIsOpen(false)
                    handleFilter('price', 'second')
                  }}
                  className={`max-[596px]:px-3 max-[596px]:py-1 px-6 py-3 rounded-full w-full border border-primary/30 ${
                    btnState.second && 'bg-primary text-background'
                  }`}>
                  Price - High to Low
                </button>
                <button
                  onClick={() => {
                    setSelectIsOpen(false)
                    handleFilter('price', 'third')
                  }}
                  className={`max-[596px]:px-3 max-[596px]:py-1 px-6 py-3 rounded-full w-full border border-primary/30 ${
                    btnState.third && 'bg-primary text-background'
                  }`}>
                  Price - Low to High
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default SortBtns
