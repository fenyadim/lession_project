import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/3_widgets/Page/Page'
import { Counter } from '@/5_entities/Counter'
import { RatingCard } from '@/5_entities/Rating'

const MainPage = memo(() => {
    const { t } = useTranslation()

    return (
        <Page>
            {t('Главная страница')}
            <Counter/>
            <RatingCard title={'Как вам статья'} feedbackTitle={'Оставьте '}/>
        </Page>
    )
})

MainPage.displayName = 'MainPage'

export default MainPage
