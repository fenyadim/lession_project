import { type FC, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from '@/3_widgets/PageLoader'
import { type AppRoutesProps, routeConfig } from '@/6_shared/config/routeConfig/routeConfig'
import { RequireAuth } from './RequireAuth'

export const AppRouter: FC = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense
                fallback={ <PageLoader/> }
            >
                { route.element }
            </Suspense>
        )

        return (
            <Route
                key={ route.path }
                path={ route.path }
                element={
                    route.authOnly
                        ? (
                            <RequireAuth
                                roles={ route.roles }>
                                { element }
                            </RequireAuth>
                        )
                        : element
                }
            />
        )
    }, [])

    return (
        <Routes>
            { Object.values(routeConfig).map(renderWithWrapper) }
        </Routes>
    )
}
