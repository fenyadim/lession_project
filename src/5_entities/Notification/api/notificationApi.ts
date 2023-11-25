import { rtkApi } from '6_shared/api/rtkApi'
import { type NotificationType } from '../model/types/notification'

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<NotificationType[], null>({
            query: () => ({
                url: '/notifications'
            })
        })
    })
})
export const useNotification = notificationApi.useGetNotificationsQuery
