import React, { type ErrorInfo, type ReactNode, Suspense } from 'react'
import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError (): { hasError: boolean } {
        return { hasError: true }
    }

    componentDidCatch (error: Error, info: ErrorInfo): void {
        console.log(error, info.componentStack)
    }

    render () {
        const { hasError } = this.state
        const { children } = this.props

        if (hasError) {
            return <Suspense fallback=''><PageError/></Suspense>
        }

        return children
    }
}

export default ErrorBoundary
