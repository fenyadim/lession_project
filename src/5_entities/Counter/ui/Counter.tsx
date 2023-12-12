import { Button } from '@/6_shared/ui/Button/Button'
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useCounterActions } from '../model/slice/counterSlice'

export const Counter = () => {
    const counterValue = useCounterValue()
    const { increment, decrement, add } = useCounterActions()

    const handleInc = () => {
        increment()
    }

    const handleDec = () => {
        decrement()
    }

    const handleAddFive = () => {
        add(5)
    }

    return (
        <div>
            <h1 data-testid="value-title">value: {counterValue}</h1>
            <Button
                data-testid="increment-btn"
                onClick={handleInc}
            >
                Increment
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={handleDec}
            >
                Decrement
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={handleAddFive}
            >
                Add 5
            </Button>
        </div>
    )
}
