import type { FeaturesFlags } from '@/6_shared/types/featuresFlags'

export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MANAGER = 'MANAGER',
}

export interface User {
    id: string
    username: string
    avatar?: string
    roles?: UserRole[]
    features?: FeaturesFlags
}

export interface UserSchema {
    authData?: User
    _inited: boolean
}
