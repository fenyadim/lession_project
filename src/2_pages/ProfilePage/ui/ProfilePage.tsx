import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Page } from '3_widgets/Page/Page'
import { EditableProfileCard } from '4_features/EditableProfileCard'
import { VStack } from '6_shared/ui/Stack'
import { Text } from '6_shared/ui/Text/Text'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const { t } = useTranslation('profile')
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return <Text
            text={ t('Произошла ошибка при получении профиля') }
            theme="error"
        />
    }

    return (
        <Page>
            <VStack max gap="16">
                <EditableProfileCard id={ id }/>
            </VStack>
        </Page>
    )
})

ProfilePage.displayName = 'ProfilePage'

export default ProfilePage
