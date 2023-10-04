import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text/Text'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/service/loginByUsername/loginByUsername'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import styles from './LoginForm.module.scss'

export interface LoginFormProps {
    className?: string
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props

    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)
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
