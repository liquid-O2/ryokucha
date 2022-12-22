import { CartDetails, Teas } from '../contextProvider'

type ReducerAction = {
  type: string
}

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'addItem':
      return [
        ...state,
        { name: action.name, price: action.price, id: action.id, image: action.image, quantity: action.quantity },
      ]

    case 'updateQuantity':
      return state.map((tea: any) => {
        if (action.id === tea.id) {
          return {
            ...tea,
            quantity: action.updateCart ? action.quantity : tea.quantity + action.quantity,
          }
        }
        return tea
      })

    case 'deleteItem':
      return state.filter((tea: any) => {
        tea.id !== action.id
      })

    default:
      return state
  }
}
