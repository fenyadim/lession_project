import { type FC, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from '@/3_widgets/Navbar'
import { Sidebar } from '@/3_widgets/Sidebar'
import { getUserInited, userActions } from '@/5_entities/User'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { AppRouter } from './provides/router/ui/AppRouter'

const App: FC = () => {
    const dispatch = useDispatch()
    const inited = useSelector(getUserInited)

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={ classNames('app', {}, []) }>
            <Suspense fallback="">
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    { inited && <AppRouter/> }
                </div>
            </Suspense>
        </div>
    )
}

export default App
