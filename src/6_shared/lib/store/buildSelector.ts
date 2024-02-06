import { useSelector } from 'react-redux'
import type { StateSchema } from '@/1_app/provides/StoreProvider'

type SelectorType<T, Args extends any[]> = (
    state: StateSchema,
    ...args: Args
) => T
type Hook<T, Args extends any[]> = (...args: Args) => T
type ReturnType<T, Args extends any[]> = [Hook<T, Args>, SelectorType<T, Args>]

export function buildSelector<T, Args extends any[]>(
    selector: SelectorType<T, Args>,
): ReturnType<T, Args> {
    const useSelectorHook: Hook<T, Args> = (...args: Args) =>
        useSelector((state: StateSchema) => selector(state, ...args))

    return [useSelectorHook, selector]
}
