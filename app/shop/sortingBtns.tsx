import { Dispatch, SetStateAction, useState } from 'react'
import { Teas } from '../../components/contextProvider'

const SortBtns = ({ setTeas }: { setTeas: Dispatch<SetStateAction<Teas[]>> }) => {
  const [btnState, setBtnState] = useState({ first: true, second: false, third: false })

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
      <div className='max-[643px]:text-sm flex-wrap  sorting-section flex w-full justify-end gap-4  '>
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
      <div className='md:hidden absolute top-full right-0 bg-background rounded-3xl'></div>
    </div>
  )
}

export default SortBtns
