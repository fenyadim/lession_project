import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', function () {
    test('have text in button component', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })
    test('check class clear', () => {
        render(<Button theme="clear">Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
    })
})
