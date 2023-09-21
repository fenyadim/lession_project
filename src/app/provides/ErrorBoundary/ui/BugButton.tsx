import { type FC, useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'

// Компонент для тестирования
export const BugButton: FC = () => {
    const [error, setError] = useState(false)

    const getError = (): void => {
        setError(true)
    }

    useEffect(() => {
        if (error) throw new Error()
    }, [error])

    return (
        <Button onClick={getError}>
            Call error
        </Button>
    )
}
