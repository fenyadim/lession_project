import { useDispatch } from 'react-redux'
import { type AppDispatch } from 'app/provides/StoreProvider'

export const useAppDispatch = () => useDispatch<AppDispatch>()
