import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { getUserAuthData, getUserRoles, type UserRole } from '@/5_entities/User'
import { getRouteForbidden, getRouteMain } from '@/6_shared/const/router'

interface RequireAuthProps {
    roles?: UserRole[]
    children: JSX.Element
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
    const auth = useSelector(getUserAuthData)
    const location = useLocation()
    const userRoles = useSelector(getUserRoles)

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true
        }

        return roles.some(requiredRole => userRoles?.includes(requiredRole))
    }, [roles, userRoles])

    if (!auth) {
        return <Navigate to={getRouteMain()} state={{ from: location }}
            replace/>
    }

    if (!hasRequiredRoles) {
        return <Navigate to={getRouteForbidden()} state={{ from: location }}
            replace/>
    }

    return children
}
