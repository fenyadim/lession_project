import { memo, useEffect } from 'react'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        void dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount>
            <div>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    )
})

ProfilePage.displayName = 'ProfilePage'

export default ProfilePage
