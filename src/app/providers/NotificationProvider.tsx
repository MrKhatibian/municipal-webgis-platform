import {
    createContext,
    useCallback,
    useEffect,
    useState,
    type ReactNode,
} from 'react';

import type {
    Notification,
    NotificationType,
} from '../../types/notification';

interface NotificationContextValue {
    notifications: Notification[];

    notify: (
        type: NotificationType,
        message: string,
        duration?: number
    ) => void;

    removeNotification: (id: number) => void;

    success: (message: string, duration?: number) => void;
    error: (message: string, duration?: number) => void;
    warning: (message: string, duration?: number) => void;
    info: (message: string, duration?: number) => void;
}

export const NotificationContext = createContext<NotificationContextValue | null>(null);

interface NotificationProviderProps {
    children: ReactNode;
}

export function NotificationProvider({
    children,
}: NotificationProviderProps) {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const removeNotification = useCallback((id: number) => {
        setNotifications((current) =>
            current.filter(
                (notification) => notification.id !== id
            )
        );
    }, []);

    const notify = useCallback(
        (
            type: NotificationType,
            message: string,
            duration = 4000
        ) => {
            setNotifications((current) => {
                const existing = current.find(
                    (notification) =>
                        notification.type === type &&
                        notification.message === message
                );

                if (existing) {
                    return current.map((notification) =>
                        notification.id === existing.id
                            ? {
                                ...notification,
                                count: notification.count + 1,
                            }
                            : notification
                    );
                }

                const id = Date.now() + Math.random();

                const newNotification: Notification = {
                    id,
                    type,
                    message,
                    duration,
                    count: 1,
                };

                return [...current, newNotification].slice(-5);
            });
        },
        []
    );

    useEffect(() => {
        if (notifications.length === 0) return;

        const timers = notifications
            .filter(
                (notification) =>
                    notification.duration &&
                    notification.duration > 0
            )
            .map((notification) =>
                window.setTimeout(() => {
                    removeNotification(notification.id);
                }, notification.duration)
            );

        return () => {
            timers.forEach((timer) => {
                window.clearTimeout(timer);
            });
        };
    }, [notifications, removeNotification]);

    const success = useCallback(
        (message: string, duration?: number) =>
            notify('success', message, duration),
        [notify]
    );

    const error = useCallback(
        (message: string, duration?: number) =>
            notify('error', message, duration),
        [notify]
    );

    const warning = useCallback(
        (message: string, duration?: number) =>
            notify('warning', message, duration),
        [notify]
    );

    const info = useCallback(
        (message: string, duration?: number) =>
            notify('info', message, duration),
        [notify]
    );

    return (
        <NotificationContext.Provider
            value={{
                notifications,
                notify,
                removeNotification,
                success,
                error,
                warning,
                info,
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
}