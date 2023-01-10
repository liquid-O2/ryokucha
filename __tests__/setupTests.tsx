import { render, RenderOptions } from '@testing-library/react'
import React, { ReactElement } from 'react'
import { TGlobalContext } from '../components/contextProvider'
import { GlobalContext } from '../components/contextProvider'

function Providers({ children, context }: { children: React.ReactNode; context: TGlobalContext }) {
  return (
    <GlobalContext.Provider
      value={{
        ...context,
        signIn: () => undefined,
        signUp: () => undefined,
        logout: () => undefined,
        isLoggedIn: true,
        updateUser: () => undefined,
        cartDetails: [{}],
        signUpWithGoogle: () => undefined,
        dispatch: () => undefined,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
const customRender = (ui: ReactElement, context?: TGlobalContext, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, {
    wrapper: () => <Providers context={context!}>{ui}</Providers>,
    ...options,
  })

export * from '@testing-library/react'
export { customRender as render }
