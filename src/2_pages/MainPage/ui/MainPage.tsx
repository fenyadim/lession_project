import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '3_widgets/Page/Page'

const MainPage = memo(() => {
    const { t } = useTranslation()

    return (
        <Page>
            { t('Главная страница') }
        </Page>
    )
})

MainPage.displayName = 'MainPage'

export default MainPage