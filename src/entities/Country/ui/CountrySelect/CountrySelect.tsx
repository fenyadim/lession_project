import { memo, useCallback } from 'react'
import { Country } from '../../model/types/country'
import { Select } from 'shared/ui/Select/Select'
import { useTranslation } from 'react-i18next'

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country, name: string) => void
    readonly?: boolean
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Kazakhstan, content: Country.Kazakhstan }
]

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { value, onChange, readonly, className } = props

    const { t } = useTranslation('profile')

    const onChangeHandler = useCallback((value: string, name?: string) => {
        onChange?.(value as Country, name as string)
    }, [onChange])

    return (
        <Select
            name="country"
            className={ className }
            label={ t('Укажите страну') }
            options={ options }
            value={ value }
            onChange={ onChangeHandler }
            readonly={ readonly }
        />
    )
})

CountrySelect.displayName = 'CountrySelect'
