import { useNotification } from '../../hooks/useNotification';

export default function ToastContainer() {
    const {
        notifications,
        removeNotification,
    } = useNotification();

    const getToastClass = (type: string) => {
        switch (type) {
            case 'success':
                return 'text-bg-success';

            case 'error':
                return 'text-bg-danger';

            case 'warning':
                return 'text-bg-warning';

            case 'info':
                return 'text-bg-info';

            default:
                return 'text-bg-secondary';
        }
    };

    const getTitle = (type: string) => {
        switch (type) {
            case 'success':
                return 'موفق';

            case 'error':
                return 'خطا';

            case 'warning':
                return 'هشدار';

            case 'info':
                return 'اطلاع';

            default:
                return '';
        }
    };

    return (
        <div
            className="toast-container position-fixed top-0 start-0 p-3"
            style={{ zIndex: 2000 }}
            aria-live="polite"
            aria-atomic="true"
        >
            {/* {notifications.map((notification) => ( */}
            {notifications.slice(-4).map((notification) => (
                <div
                    key={notification.id}
                    className={`toast show ${getToastClass(
                        notification.type
                    )}`}
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div className="toast-header">
                        <strong className="me-auto">
                            {getTitle(notification.type)}
                        </strong>

                        <button
                            type="button"
                            className="btn-close"
                            aria-label="بستن"
                            onClick={() =>
                                removeNotification(notification.id)
                            }
                        />
                    </div>

                    <div className="toast-body">
                        {notification.message}

                        {notification.count > 1 && (
                            <span className="ms-2 badge bg-secondary">
                                × {notification.count}
                            </span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}