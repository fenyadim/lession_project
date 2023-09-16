import { lazy } from 'react'

export const MainAsyncPage = lazy(async () => await import('./MainPage'))
