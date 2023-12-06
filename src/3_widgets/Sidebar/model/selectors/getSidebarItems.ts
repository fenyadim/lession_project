import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/5_entities/User'
import AboutIcon from '@/6_shared/assets/icons/about.svg'
import ArticlesIcon from '@/6_shared/assets/icons/article.svg'
import MainIcon from '@/6_shared/assets/icons/main.svg'
import ProfileIcon from '@/6_shared/assets/icons/profile.svg'
import { RoutePath } from '@/6_shared/const/router'
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
