import { memo, useCallback } from 'react'
import { Country } from '../../model/types/country'
import { useTranslation } from 'react-i18next'
import { ListBox } from 'shared/ui/ListBox/ListBox'

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
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

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return (
        <ListBox
            className={ className }
            label={ t('Укажите страну') }
            defaultValue={ t('Укажите страну') }
            items={ options }
            value={ value }
            onChange={ onChangeHandler }
            readonly={ readonly }
            direction="top"
        />
    )
})

CountrySelect.displayName = 'CountrySelect'
