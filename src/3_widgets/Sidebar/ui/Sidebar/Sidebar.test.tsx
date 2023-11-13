import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from '6_shared/lib/tests/componentRender/componentRender'
import { Sidebar } from './Sidebar'

describe('Sidebar', function () {
    test('sidebar render in page', () => {
        componentRender(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('test toggle', () => {
        componentRender(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
