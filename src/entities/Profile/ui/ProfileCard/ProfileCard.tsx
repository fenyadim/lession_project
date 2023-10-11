import { type FC } from 'react'
import { classNames, type ModsType } from 'shared/lib/classNames/classNames'
import styles from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Loader } from 'shared/ui/Loader/Loader'
import { type Profile } from '../../model/types/profile'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { CurrencySelect } from 'entities/Currency'
import { CountrySelect } from 'entities/Country'

interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    onChangeProfile: (field: keyof Profile, value: string) => void
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
                    value={ data?.first }
                    placeholder={ t('Ваше имя') }
                    className={ styles.input }
                    onChange={ (value) => {
                        onChangeProfile('first', value)
                    } }
                    readonly={ readonly }
                />
                <Input
                    value={ data?.lastname }
                    placeholder={ t('Ваша фамилия') }
                    className={ styles.input }
                    onChange={ (value) => {
                        onChangeProfile('lastname', value)
                    } }
                    readonly={ readonly }
                />
                <Input
                    value={ data?.age }
                    placeholder={ t('Ваш возраст') }
                    className={ styles.input }
                    onChange={ (value) => {
                        onChangeProfile('age', value)
                    } }
                    readonly={ readonly }
                />
                <Input
                    value={ data?.city }
                    placeholder={ t('Ваш город') }
                    className={ styles.input }
                    onChange={ (value) => {
                        onChangeProfile('city', value)
                    } }
                    readonly={ readonly }
                />
                <Input
                    value={ data?.username }
                    placeholder={ t('Имя пользователя') }
                    className={ styles.input }
                    onChange={ (value) => {
                        onChangeProfile('username', value)
                    } }
                    readonly={ readonly }
                />
                <Input
                    value={ data?.avatar }
                    placeholder={ t('Аватар') }
                    className={ styles.input }
                    onChange={ (value) => {
                        onChangeProfile('avatar', value)
                    } }
                    readonly={ readonly }
                />
                <CurrencySelect
                    className={ styles.input }
                    value={ data?.currency }
                    onChange={ (value) => {
                        onChangeProfile('currency', value)
                    } }
                    readonly={ readonly }
                />
                <CountrySelect
                    className={ styles.input }
                    value={ data?.country }
                    onChange={ (value) => {
                        onChangeProfile('country', value)
                    } }
                    readonly={ readonly }
                />
            </div>
        </div>
    )
}
