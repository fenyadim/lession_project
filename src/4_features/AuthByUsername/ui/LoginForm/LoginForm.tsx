import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from '6_shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from '6_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '6_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from '6_shared/ui/Button/Button'
import { Input } from '6_shared/ui/Input/Input'
import { Text } from '6_shared/ui/Text/Text'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { loginByUsername } from '../../model/service/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import styles from './LoginForm.module.scss'

export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm = memo((props: LoginFormProps) => {
    const { className, onSuccess } = props

    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)
    const dispatch = useAppDispatch()
    const { t } = useTranslation()

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [onSuccess, dispatch, password, username])

    return (
        <DynamicModuleLoader
            reducers={ initialReducers }
            removeAfterUnmount
        >
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
        </DynamicModuleLoader>
    )
})

LoginForm.displayName = 'LoginForm'

export default LoginForm
