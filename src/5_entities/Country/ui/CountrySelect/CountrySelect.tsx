import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { type Profile } from '4_features/EditableProfileCard'
import { ListBox } from '6_shared/ui/ListBox/ListBox'
import { Country } from '../../model/types/country'

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country, name: keyof Profile) => void
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
        onChange?.(value as Country, 'country')
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
            direction="top right"
        />
    )
})

CountrySelect.displayName = 'CountrySelect'
