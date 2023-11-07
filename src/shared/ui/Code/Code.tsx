import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Code.module.scss'
import { Button } from '../Button/Button'
import CopyIcon from 'shared/assets/icons/copy.svg'

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
