import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '5_entities/User'
import { RoutePath } from '6_shared/config/routeConfig/routeConfig'
import MainIcon from '6_shared/assets/icons/main.svg'
import AboutIcon from '6_shared/assets/icons/about.svg'
import ProfileIcon from '6_shared/assets/icons/profile.svg'
import ArticlesIcon from '6_shared/assets/icons/article.svg'

import { type SidebarItemType } from '../types/sidebar'

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Главная'
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'О сайте'
            }
        ]
        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticlesIcon,
                    text: 'Статьи',
                    authOnly: true
                }
            )
        }

        return sidebarItemsList
    }
)
