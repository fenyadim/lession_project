import { memo, useCallback } from 'react'
import { Currency } from '../../model/types/currency'
import { Select } from 'shared/ui/Select/Select'
import { useTranslation } from 'react-i18next'

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD }
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { value, onChange, readonly, className } = props

    const { t } = useTranslation('profile')

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    return (
        <Select
            className={ className }
            label={ t('Укажите валюту') }
            options={ options }
            value={ value }
            onChange={ onChangeHandler }
            readonly={ readonly }
        />
    )
})

CurrencySelect.displayName = 'CurrencySelect'
