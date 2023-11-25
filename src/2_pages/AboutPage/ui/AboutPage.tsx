import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '3_widgets/Page/Page'

const AboutPage = memo(() => {
    const { t } = useTranslation()
    return <Page>{t('О сайте')}</Page>
})

AboutPage.displayName = 'AboutPage'

export default AboutPage
