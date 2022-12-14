import { CartDetails } from '../contextProvider'

export type AddItemAction = {
  type: 'addItem'
  name: string
  price: number
  slug: string
  image: { asset: { url: string; metadata: { lqip: string } } }
  quantity: number
}

export type DeleteItemAction = {
  type: 'deleteItem'
  slug: string
}

export type UpdateQuantityAction = {
  type: 'updateQuantity'
  quantity: number
  slug: string
  updateCart: boolean
}

export const reducer = (state: CartDetails[], action: AddItemAction | DeleteItemAction | UpdateQuantityAction) => {
  switch (action.type) {
    case 'addItem':
      return [
        ...state,
        {
          name: action.name,
          price: action.price,
          slug: action.slug,
          image: action.image,
          quantity: action.quantity,
        },
      ]

    case 'updateQuantity':
      return state.map((tea: CartDetails) => {
        if (action.slug === tea.slug) {
          return {
            ...tea,
            quantity: action.updateCart ? action.quantity : tea.quantity! + action.quantity,
          }
        }
        return tea
      })

    case 'deleteItem':
      return state.filter((tea: any) => {
        return tea.slug !== action.slug
      })

    default:
      return state
  }
}
