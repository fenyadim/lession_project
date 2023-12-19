import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/3_widgets/Page/Page'
import { Text } from '@/6_shared/ui/Text/Text'

export const ForbiddenPage = memo(() => {
    const { t } = useTranslation()

    return (
        <Page data-testid='ForbiddenPage'>
            <Text
                theme="error"
                align="center"
                title={t('У вас нет прав к этой странице')}
            />
        </Page>
    )
})

ForbiddenPage.displayName = 'ForbiddenPage'
