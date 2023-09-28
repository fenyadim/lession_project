import { type FC, Suspense } from 'react'
import { useTheme } from 'app/provides/ThemeProvider'
import { AppRouter } from 'app/provides/router'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App: FC = () => {
    return (
        <div className={ classNames('app', {}, []) }>
            <Suspense fallback="">
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
