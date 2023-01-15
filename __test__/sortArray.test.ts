import { sortArray } from '../components/utils/sort'
import { describe, it, expect } from 'vitest'

const itemOne = { name: 'Alpha', price: 2 }
const itemTwo = { name: 'Beta', price: 1 }
const itemThree = { name: 'Gamma', price: 3 }

const mockData = [itemTwo, itemOne, itemThree]

describe('Sort Arrays', () => {
  it('Returns an array in ascending order based on name', () => {
    const sortedArray = sortArray(mockData, 'name', false)
    expect(sortedArray).toStrictEqual([itemOne, itemTwo, itemThree])
  }),
    it('Returns an array in descending order based on name', () => {
      const sortedArray = sortArray(mockData, 'name', true)
      expect(sortedArray).toStrictEqual([itemThree, itemTwo, itemOne])
    }),
    it('Returns an array in ascending order based on price', () => {
      const sortedArray = sortArray(mockData, 'price', false)
      expect(sortedArray).toStrictEqual([itemTwo, itemOne, itemThree])
    }),
    it('Returns an array in descending order based on price', () => {
      const sortedArray = sortArray(mockData, 'price', true)
      expect(sortedArray).toStrictEqual([itemThree, itemOne, itemTwo])
    })
})
