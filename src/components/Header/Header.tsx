
interface HeaderProps {
    sidebarCollapsed: boolean;
    onToggleSidebar: () => void;
}
export default function Header({
    sidebarCollapsed, onToggleSidebar
}: HeaderProps) {
    return (
        <header className="app-header">
            <div className="app-brand">
                <div className="municipality-logo">
                    <svg viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M24 4 5 17v27h38V17L24 4Zm0 5 13 9H11l13-9Zm-8 14h5v15h-5V23Zm11 0h5v15h-5V23Z" />
                    </svg>
                    {/* <img src="/logo.png" alt="شهرداری مراغه" /> */}
                </div>
                <div className="app-brand-text">
                    <strong>شهرداری مراغه</strong>
                    <span>سامانه اطلاعات مکانی شهری</span>
                </div>
            </div>

            <div className="app-header-actions">
                <button
                    type="button"
                    className="sidebar-toggle"
                    onClick={onToggleSidebar}
                    title={sidebarCollapsed ? 'باز کردن منو' : 'بستن منو'}
                    aria-label={sidebarCollapsed ? 'باز کردن منو' : 'بستن منو'}
                >
                    <span className="toggle-icon">☰</span>
                </button>
            </div>
        </header>
    );
}