import { useCallback, type FC } from 'react'
import { classNames, type ModsType } from 'shared/lib/classNames/classNames'
import styles from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { CurrencySelect } from 'entities/Currency'
import { CountrySelect } from 'entities/Country'
import { type Profile } from 'features/EditableProfileCard'

interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    onChangeProfile: (name: string, value: string | number) => void
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeProfile
    } = props

    const { t } = useTranslation('profile')

    const onChangeHandler = useCallback((value: string, name?: string) => {
        if (name === 'age') {
            const numberValue = value.match(/^\d+$/)?.input
            if (numberValue !== undefined) {
                onChangeProfile(name as keyof Profile, Number(value))
            }
        } else {
            onChangeProfile(name as keyof Profile, value)
        }
    }, [onChangeProfile])

    if (isLoading) {
        return (
            <div className={ classNames(styles.ProfileCard, {},
                [className, styles.loading]) }>
                <Loader/>
            </div>
        )
    }

    if (error) {
        return (
            <div className={ classNames(styles.ProfileCard, {},
                [className, styles.error]) }>
                <Text
                    theme="error"
                    align="center"
                    title={ t('Произошла ошибка при загрузке профиля') }
                    text={ t('Попробуйте перезагрузить страницу') }
                />
            </div>
        )
    }

    const mods: ModsType = {
        [styles.editing]: !readonly
    }

    return (
        <div className={ classNames(styles.ProfileCard, mods, [className]) }>
            <div className={ styles.data }>
                { data?.avatar && <div className={ styles.avatarWrapper }>
                    <Avatar
                        src={ data.avatar }
                        alt="Avatar"
                    />
                </div> }
                <Input
                    name="first"
                    value={ data?.first }
                    placeholder={ t('Ваше имя') }
                    className={ styles.input }
                    onChange={ onChangeHandler }
                    readonly={ readonly }
                />
                <Input
                    name="lastname"
                    value={ data?.lastname }
                    placeholder={ t('Ваша фамилия') }
                    className={ styles.input }
                    onChange={ onChangeHandler }
                    readonly={ readonly }
                />
                <Input
                    name="age"
                    value={ data?.age }
                    placeholder={ t('Ваш возраст') }
                    className={ styles.input }
                    onChange={ onChangeHandler }
                    readonly={ readonly }
                />
                <Input
                    name="city"
                    value={ data?.city }
                    placeholder={ t('Ваш город') }
                    className={ styles.input }
                    onChange={ onChangeHandler }
                    readonly={ readonly }
                />
                <Input
                    name="username"
                    value={ data?.username }
                    placeholder={ t('Имя пользователя') }
                    className={ styles.input }
                    onChange={ onChangeHandler }
                    readonly={ readonly }
                />
                <Input
                    name="avatar"
                    value={ data?.avatar }
                    placeholder={ t('Аватар') }
                    className={ styles.input }
                    onChange={ onChangeHandler }
                    readonly={ readonly }
                />
                <CurrencySelect
                    className={ styles.input }
                    value={ data?.currency }
                    onChange={ onChangeHandler }
                    readonly={ readonly }
                />
                <CountrySelect
                    className={ styles.input }
                    value={ data?.country }
                    onChange={ onChangeHandler }
                    readonly={ readonly }
                />
            </div>
        </div>
    )
}
