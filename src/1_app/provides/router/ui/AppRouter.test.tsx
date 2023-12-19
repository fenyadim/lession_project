import { screen } from '@testing-library/react'
import { UserRole } from '@/5_entities/User'
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/6_shared/const/router'
import { componentRender } from '@/6_shared/lib/tests/componentRender/componentRender'
import { AppRouter } from './AppRouter'

describe('app/router/AppRouter', function () {
    test('Страница должна отрендериться', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteAbout()
        })

        const page = await screen.findByTestId('AboutPage')
        expect(page).toBeInTheDocument()
    })

    test('Страница не найдена', async () => {
        componentRender(<AppRouter/>, {
            route: '/sadsada'
        })

        const page = await screen.findByTestId('NotFoundPage')
        expect(page).toBeInTheDocument()
    })

    test('Пользователь не авторизован', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteProfile('1')
        })

        const page = await screen.findByTestId('MainPage')
        expect(page).toBeInTheDocument()
    })

    test('Пользователь авторизован', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _inited: true,
                    authData: {}
                }
            }
        })

        const page = await screen.findByTestId('ProfilePage')
        expect(page).toBeInTheDocument()
    })

    test('Пользователь не администратор', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _inited: true,
                    authData: {}
                }
            }
        })

        const page = await screen.findByTestId('ForbiddenPage')
        expect(page).toBeInTheDocument()
    })

    test('Пользователь администратор', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _inited: true,
                    authData: {
                        roles: [UserRole.ADMIN]
                    }
                }
            }
        })

        const page = await screen.findByTestId('AdminPanelPage')
        expect(page).toBeInTheDocument()
    })
})
