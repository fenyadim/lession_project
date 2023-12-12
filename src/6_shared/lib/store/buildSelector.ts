import { useSelector } from 'react-redux'
import type { StateSchema } from '@/1_app/provides/StoreProvider'

type SelectorType<T> = (state: StateSchema) => T
type ReturnType<T> = [() => T, SelectorType<T>]

export function buildSelector<T> (selector: SelectorType<T>): ReturnType<T> {
    const useSelectorHook = () => useSelector(selector)

    return [useSelectorHook, selector]
}
