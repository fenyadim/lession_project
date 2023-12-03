import { type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    element?: HTMLElement
    children: ReactNode
}

export const Portal = (props: PortalProps) => {
    const { children, element = document.body } = props

    const storybookElem = document.getElementById('storybook-root')

    return (
        createPortal(children, storybookElem?.children[0] || element)
    )
}
