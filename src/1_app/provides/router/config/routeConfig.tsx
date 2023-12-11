import { AboutPage } from '@/2_pages/AboutPage'
import { AdminPanelPage } from '@/2_pages/AdminPanelPage'
import { ArticleDetailPage } from '@/2_pages/ArticleDetailPage'
import { ArticleEditPage } from '@/2_pages/ArticleEditPage'
import { ArticlesPage } from '@/2_pages/ArticlesPage'
import { ForbiddenPage } from '@/2_pages/ForbiddenPage'
import { MainPage } from '@/2_pages/MainPage'
import { NotFoundPage } from '@/2_pages/NotFoundPage'
import { ProfilePage } from '@/2_pages/ProfilePage'
import { UserRole } from '@/5_entities/User'
import {
    AppRoutes,
    getRouteAbout,
    getRouteAdmin,
    getRouteArticleCreate,
    getRouteArticleDetails,
    getRouteArticleEdit,
    getRouteArticles,
    getRouteForbidden,
    getRouteMain,
    getRouteProfile
} from '@/6_shared/const/router'
import type { AppRoutesProps } from '@/6_shared/types/router'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage/>
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlesPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetailPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: getRouteAdmin(),
        element: <AdminPanelPage/>,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER]
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage/>
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage/>
    }
}
