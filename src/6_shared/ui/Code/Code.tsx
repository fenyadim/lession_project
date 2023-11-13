import { memo, useCallback } from 'react'
import CopyIcon from '../../assets/icons/copy.svg'
import { classNames } from '../../lib/classNames/classNames'
import { Button } from '../Button/Button'
import styles from './Code.module.scss'

interface CodeProps {
    className?: string
    text: string
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props

    const onCopy = useCallback(() => {
        void navigator.clipboard.writeText(text)
    }, [text])

    return (
        <pre className={ classNames(styles.Code, {}, [className]) }>
            <Button
                onClick={ onCopy }
                className={ styles.copyBtn }
                theme="clear"
            >
                <CopyIcon className={ styles.copyIcon }/>
            </Button>
            <code>
                { text }
            </code>
        </pre>
    )
})

Code.displayName = 'Code'
