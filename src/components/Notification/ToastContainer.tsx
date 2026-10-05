import { useNotification } from '../../hooks/useNotification';

const TOAST_META: Record<string, { title: string; icon: string }> = {
    success: { title: 'موفق', icon: '✓' },
    error: { title: 'خطا', icon: '!' },
    warning: { title: 'هشدار', icon: '!' },
    info: { title: 'اطلاع', icon: 'i' },
};

export default function ToastContainer() {
    const { notifications, removeNotification } = useNotification();

    return (
        <div className="app-toast-container" aria-live="polite" aria-atomic="true">
            {notifications.slice(-4).map((notification) => {
                const meta = TOAST_META[notification.type];

                return (
                    <div
                        key={notification.id}
                        className={`app-toast app-toast--${notification.type}`}
                        role="alert"
                    >
                        <span className="app-toast-icon" aria-hidden="true">
                            {meta?.icon}
                        </span>

                        <div className="app-toast-content">
                            <strong>{meta?.title}</strong>
                            <span>
                                {notification.message}
                                {notification.count > 1 && (
                                    <em className="app-toast-count">
                                        {notification.count}
                                    </em>
                                )}
                            </span>
                        </div>

                        <button
                            type="button"
                            className="app-toast-close"
                            aria-label="بستن"
                            onClick={() => removeNotification(notification.id)}
                        >
                            ×
                        </button>
                    </div>
                );
            })}
        </div>
    );
}