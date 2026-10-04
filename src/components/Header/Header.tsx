import logoShahrdari from '../../assets/images/LogoShahrdari.png';

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
                {/* <button
                    type="button"
                    className="mobile-sidebar-toggle"
                    onClick={onToggleSidebar}
                    title={sidebarCollapsed ? 'باز کردن منو' : 'بستن منو'}
                    aria-label={sidebarCollapsed ? 'باز کردن منو' : 'بستن منو'}
                >
                    <span>{sidebarCollapsed ? "»" : "«"}</span>
                </button> */}
               
                <a
                    className="municipality-logo"
                    href="https://maragheh.ir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="وب‌سایت شهرداری مراغه"
                >
                    <img src={logoShahrdari} alt="شهرداری مراغه" />
                </a>
                <div className="app-brand-text">
                    <strong>شهرداری مراغه</strong>
                    <span>سامانه اطلاعات مکانی شهری</span>
                </div>
            </div>            
        </header>
    );
}