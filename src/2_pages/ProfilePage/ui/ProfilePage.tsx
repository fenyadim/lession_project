import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { Page } from '@/3_widgets/Page/Page'
import { EditableProfileCard } from '@/4_features/EditableProfileCard'
import { ProfileRating } from '@/4_features/ProfileRating'
import { VStack } from '@/6_shared/ui/Stack'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>()

    if (!id) return null

    return (
        <Page data-testid='ProfilePage'>
            <VStack max gap="16">
                <EditableProfileCard id={id}/>
                <ProfileRating profileId={id}/>
            </VStack>
        </Page>
    )
})

ProfilePage.displayName = 'ProfilePage'

export default ProfilePage
