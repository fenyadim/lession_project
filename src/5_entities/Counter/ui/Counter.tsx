import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@/6_shared/ui/Button/Button'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../model/slice/counterSlice'

export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)

    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid="value-title">value: { counterValue }</h1>
            <Button
                data-testid="increment-btn"
                onClick={ increment }
            >
                Increment
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={ decrement }
            >
                Decrement
            </Button>
        </div>
    )
}
