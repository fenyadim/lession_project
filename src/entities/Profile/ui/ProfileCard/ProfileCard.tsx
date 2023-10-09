import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { Text } from 'shared/ui/Text/Text'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
    className?: string
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { className } = props

    const { t } = useTranslation('profile')
    const data = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)

    console.log(isLoading, error)

    return (
        <div className={ classNames(styles.ProfileCard, {}, [className]) }>
            <div className={ styles.header }>
                <Text title={ t('Профиль') }/>
                <Button
                    theme="outline"
                    className={ styles.editBtn }
                >
                    { t('Редактировать') }
                </Button>
            </div>
            <div className={ styles.data }>
                <Input
                    value={ data?.first }
                    placeholder={ t('Ваше имя') }
                    className={ styles.input }
                />
                <Input
                    value={ data?.lastname }
                    placeholder={ t('Ваша фамилия') }
                    className={ styles.input }
                />
            </div>
        </div>
    )
}
