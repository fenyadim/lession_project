import { memo } from 'react'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { Skeleton } from '@/6_shared/ui/Skeleton/Skeleton'
import { VStack } from '@/6_shared/ui/Stack'
import { useNotification } from '../../api/notificationApi'
import { NotificationItem } from '../NotificationItem/NotificationItem'

interface NotificationListProps {
    className?: string
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props

    const { data, isLoading } = useNotification(null, {
        pollingInterval: 5000
    })

    if (isLoading) {
        return (
            <VStack
                gap='16'
                max
                className={classNames('', {}, [className])}
            >
                <Skeleton width='100%' height="80px" border="8px"/>
                <Skeleton width='100%' height="80px" border="8px"/>
                <Skeleton width='100%' height="80px" border="8px"/>
            </VStack>
        )
    }

    return (
        <VStack
            gap='16'
            max
            className={classNames('', {}, [className])}
        >
            {data?.map(item => (
                <NotificationItem key={item.id} item={item}/>
            ))}
        </VStack>
    )
})

NotificationList.displayName = 'NotificationList'
