import { CartDetails } from '../contextProvider'

export type AddItemAction = {
  type: 'addItem'
  name: string
  price: number
  id: string
  image: string
  quantity: number
}

export type DeleteItemAction = {
  type: 'deleteItem'
  id: string
}

export type UpdateQuantityAction = {
  type: 'updateQuantity'
  quantity: number
  id: string
  updateCart: boolean
}

export const reducer = (state: CartDetails[], action: AddItemAction | DeleteItemAction | UpdateQuantityAction) => {
  switch (action.type) {
    case 'addItem':
      return [
        ...state,
        { name: action.name, price: action.price, id: action.id, image: action.image, quantity: action.quantity },
      ]

    case 'updateQuantity':
      return state.map((tea: CartDetails) => {
        if (action.id === tea.id) {
          return {
            ...tea,
            quantity: action.updateCart ? action.quantity : tea.quantity! + action.quantity,
          }
        }
        return tea
      })

    case 'deleteItem':
      return state.filter((tea: any) => {
        return tea.id !== action.id
      })

    default:
      return state
  }
}
