import logoShahrdari from '../../assets/images/LogoShahrdari.png';

export default function Header() {
    return (
        <header className="app-header">
            <div className="app-brand">                
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