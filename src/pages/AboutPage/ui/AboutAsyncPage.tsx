import { lazy } from 'react'

export const AboutAsyncPage = lazy(async () => await import('./AboutPage'))
