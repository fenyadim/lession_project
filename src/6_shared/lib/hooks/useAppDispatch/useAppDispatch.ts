import { useDispatch } from 'react-redux'
import { type AppDispatch } from '@/1_app/provides/StoreProvider'

export const useAppDispatch = () => useDispatch<AppDispatch>()
