import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { type Profile } from '@/4_features/EditableProfileCard'
import { ListBox } from '@/6_shared/ui/Popups/ui/ListBox/ListBox'
import { Currency } from '../../model/types/currency'

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency, name: keyof Profile) => void
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
        onChange?.(value as Currency, 'currency')
    }, [onChange])

    return (
        <ListBox
            className={className}
            label={t('Укажите валюту')}
            defaultValue={t('Укажите валюту')}
            items={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
        />
    )
})

CurrencySelect.displayName = 'CurrencySelect'
