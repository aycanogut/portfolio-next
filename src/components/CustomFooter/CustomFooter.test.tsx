import { render, screen } from '@testing-library/react'
import Footer from './CustomFooter'

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Footer />)
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/theming/next/'
    )
  })
})
