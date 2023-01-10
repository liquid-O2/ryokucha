import '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import RandoComponent from './randoComponent'

describe('Test', () => {
  const user = userEvent.setup()
  test('Check if the text is displayed', async () => {
    render(<RandoComponent />)

    const textFound = await screen.findByText('randoComponent')

    await expect(textFound).toBeInTheDocument()
  })
})
