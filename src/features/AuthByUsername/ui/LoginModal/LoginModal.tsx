import { type FC, Suspense } from 'react'
import { Modal, type ModalProps } from 'widgets/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Loader } from 'shared/ui/Loader/Loader'

export const LoginModal: FC<ModalProps> = (props) => {
    const { isOpen, onClose } = props

    return (
        <Modal
            isOpen={ isOpen }
            onClose={ onClose }
            lazy
        >
            <Suspense fallback={ <Loader/> }>
                <LoginFormAsync/>
            </Suspense>
        </Modal>
    )
}
