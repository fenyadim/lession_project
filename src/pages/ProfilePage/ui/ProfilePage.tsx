import { memo, useCallback, useEffect } from 'react'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, type Profile, profileActions, ProfileCard, profileReducer } from 'entities/Profile'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)

    useEffect(() => {
        void dispatch(fetchProfileData())
    }, [dispatch])

    const onChangeProfile = useCallback(
        (field: keyof Profile, value: string) => {
            if (field === 'age') {
                const numberValue = value.match(/^\d+$/)?.input
                if (numberValue !== undefined) {
                    dispatch(profileActions.updateProfile({
                        age: Number(value)
                    }))
                }
            } else {
                dispatch(profileActions.updateProfile({
                    [field]: value
                }))
            }
        }, [dispatch])

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount>
            <div>
                <ProfilePageHeader/>
                <ProfileCard
                    data={ formData }
                    isLoading={ isLoading }
                    error={ error }
                    onChangeProfile={ onChangeProfile }
                    readonly={ readonly }
                />
            </div>
        </DynamicModuleLoader>
    )
})

ProfilePage.displayName = 'ProfilePage'

export default ProfilePage
