import { buildSelector } from '@/6_shared/lib/store/buildSelector'

export const [useCounterValue, getCounterValue] = buildSelector((state) => state.counter.value)
