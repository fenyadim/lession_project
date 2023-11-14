export { userReducer, userActions } from './model/slice/userSlice'
export { type UserSchema, type User, UserRole } from './model/types/user'
export { getUserAuthData } from './model/selectors/getUserAuthData'
export { getUserInited } from './model/selectors/getUserInited'

export { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/getRoleSelector'
