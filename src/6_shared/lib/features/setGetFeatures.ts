import type { FeaturesFlags } from '../../types/featuresFlags'

let featuresFlags: FeaturesFlags

export function setFeaturesFlags(newFeaturesFlags?: FeaturesFlags) {
    if (newFeaturesFlags) {
        featuresFlags = newFeaturesFlags
    }
}

export function getFeatureFlags(flag: keyof FeaturesFlags) {
    return featuresFlags[flag]
}
