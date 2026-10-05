import { useContext } from 'react';
import { NotificationContext } from '../app/providers/NotificationProvider';

export function useNotification() {
    const context = useContext(NotificationContext);

    if (!context) {
        throw new Error(
            'useNotification must be used inside NotificationProvider'
        );
    }

    return context;
}