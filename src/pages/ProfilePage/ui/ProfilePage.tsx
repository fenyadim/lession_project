import { memo } from 'react'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'
import { useTranslation } from 'react-i18next'

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const { t } = useTranslation()

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount>
            <div>
                { t('Страница профиля') }
            </div>
        </DynamicModuleLoader>
    )
})

ProfilePage.displayName = 'ProfilePage'

export default ProfilePage
