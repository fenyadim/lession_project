import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text/Text'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState'
import { loginByUsername } from '../../model/service/loginByUsername/loginByUsername'
import styles from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props

    const { username, password, isLoading, error } = useSelector(getLoginState)
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])

    return (
        <div className={ classNames(styles.LoginForm, {}, [className]) }>
            <Text title={ t('Форма авторизации') }/>
            { error && <Text text={ error } theme="error"/> }
            <Input
                placeholder={ t('Введите username') }
                className={ styles.input }
                value={ username }
                onChange={ onChangeUsername }
                autofocus
            />
            <Input
                placeholder={ t('Введите пароль') }
                className={ styles.input }
                value={ password }
                onChange={ onChangePassword }
            />
            <Button
                theme="outline"
                className={ styles.loginBtn }
                onClick={ onLoginClick }
                disabled={ isLoading }
            >
                { t('Войти') }
            </Button>
        </div>
    )
})

LoginForm.displayName = 'LoginForm'
