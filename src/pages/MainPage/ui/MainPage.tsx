import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from "app/provides/ErrorBoundary";

const MainPage: FC = () => {
    const {t} = useTranslation()

    return <div>
        <BugButton/>
        {t('Главная страница')}
    </div>
}

export default MainPage
