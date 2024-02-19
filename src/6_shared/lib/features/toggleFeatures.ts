import { getFeatureFlags } from '@/6_shared/lib/features/setGetFeatures'
import type { FeaturesFlags } from '@/6_shared/types/featuresFlags'

interface ToggleFeaturesOptions<T> {
    name: keyof FeaturesFlags
    on: () => T
    off: () => T
}

export function toggleFeatures<T>({
    name,
    on,
    off,
}: ToggleFeaturesOptions<T>): T {
    if (getFeatureFlags(name)) {
        return on()
    }

    return off()
}
