import { type FC, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { Modal } from 'widgets/Modal'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props

    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback((): void => {
        setIsAuthModal(prev => !prev)
    }, [])

    return (
        <div className={ classNames(styles.Navbar, {}, [className]) }>
            <Button
                theme="clear"
                className={ styles.links }
                onClick={ onToggleModal }
            >
                { t('Войти') }
            </Button>
            <Modal isOpen={ isAuthModal } onClose={ onToggleModal }>
                Test test test test test test test
            </Modal>
        </div>
    )
}
