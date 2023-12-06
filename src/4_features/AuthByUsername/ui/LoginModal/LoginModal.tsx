import { type FC, Suspense } from 'react'
import { Loader } from '@/6_shared/ui/Loader/Loader'
import type { ModalProps } from '@/6_shared/ui/Modal/Modal'
import { Modal } from '@/6_shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

export const LoginModal: FC<ModalProps> = (props) => {
    const { isOpen, onClose } = props

    if (!onClose) return null

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader/>}>
                <LoginFormAsync onSuccess={onClose}/>
            </Suspense>
        </Modal>
    )
}
