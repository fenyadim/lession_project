import { type FC } from 'react'
import { Modal, type ModalProps } from 'widgets/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

export const LoginModal: FC<ModalProps> = (props) => {
    const { isOpen, onClose } = props

    return (
        <Modal
            isOpen={ isOpen }
            onClose={ onClose }
            lazy
        >
            <LoginForm/>
        </Modal>
    )
}
