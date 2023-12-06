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
import { AppRoutes, RoutePath } from '@/6_shared/const/router'
import type { AppRoutesProps } from '@/6_shared/types/router'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile + ':id',
        element: <ProfilePage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: RoutePath.article_detail + ':id',
        element: <ArticleDetailPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: RoutePath.article_create,
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: RoutePath.article_edit,
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: RoutePath.admin_panel,
        element: <AdminPanelPage/>,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER]
    },
    [AppRoutes.FORBIDDEN]: {
        path: RoutePath.forbidden,
        element: <ForbiddenPage/>
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
}
