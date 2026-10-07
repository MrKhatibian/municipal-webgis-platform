import type { ReactNode } from 'react';

interface MainLayoutProp {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProp) {   
    return (
        <div className="vh-100 d-flex flex-column">
            <main className={`app-shell`}>
                {children}
            </main>

            <footer className="app-footer">                
                <span>© تمامی حقوق معنوی برای {' '}
                    <a
                        href="https://maragheh.ir/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        شهرداری مراغه
                    </a>                    
                    {' '}محفوظ می باشد.</span>
                <span className="app-footer-divider" aria-hidden="true" />
                <span>
                    طراحی و توسعه:{' '}
                    <a
                        href="https://www.amardco.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        تحلیلگران آمارد نوین
                    </a>
                </span>
            </footer>
        </div>
    );
}