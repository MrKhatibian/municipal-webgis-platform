import {
    createContext,
    useCallback,
    useState,
    type ReactNode,
} from 'react';

import type {
    Notification,
    NotificationType,
} from '../../types/notification';

interface NotificationContextValue {
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

export const NotificationContext =
    createContext<NotificationContextValue | null>(null);

interface NotificationProviderProps {
    children: ReactNode;
}

export function NotificationProvider({
    children,
}: NotificationProviderProps) {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const removeNotification = useCallback((id: number) => {
        setNotifications((current) =>
            current.filter((notification) => notification.id !== id)
        );
    }, []);

    const notify = useCallback(
        (
            type: NotificationType,
            message: string,
            duration = 4000
        ) => {
            const id = Date.now() + Math.random();

            setNotifications((current) => [
                ...current,
                {
                    id,
                    type,
                    message,
                    duration,
                },
            ]);

            if (duration > 0) {
                window.setTimeout(() => {
                    removeNotification(id);
                }, duration);
            }
        },
        [removeNotification]
    );

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