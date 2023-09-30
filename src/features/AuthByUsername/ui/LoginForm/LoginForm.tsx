import { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import styles from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props

    const [userName, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const { t } = useTranslation()

    const onChangeName = (val: string) => {
        setUserName(val)
    }

    const onChangePassword = (val: string) => {
        setPassword(val)
    }

    return (
        <div className={ classNames(styles.LoginForm, {}, [className]) }>
            <Input
                placeholder={ t('Введите username') }
                className={ styles.input }
                value={ userName }
                onChange={ onChangeName }
                autofocus
            />
            <Input
                placeholder={ t('Введите пароль') }
                className={ styles.input }
                value={ password }
                onChange={ onChangePassword }
            />
            <Button className={ styles.loginBtn }>
                { t('Войти') }
            </Button>
        </div>
    )
}
