import { type FC, Suspense } from 'react'
import { Modal, type ModalProps } from '3_widgets/Modal'
import { Loader } from '6_shared/ui/Loader/Loader'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

export const LoginModal: FC<ModalProps> = (props) => {
    const { isOpen, onClose } = props

    return (
        <Modal
            isOpen={ isOpen }
            onClose={ onClose }
            lazy
        >
            <Suspense fallback={ <Loader/> }>
                <LoginFormAsync onSuccess={ onClose }/>
            </Suspense>
        </Modal>
    )
}
