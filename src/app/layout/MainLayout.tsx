import type { ReactNode } from 'react';

interface MainLayoutProp {
    children: ReactNode;
    sidebarCollapsed: boolean;
}

export default function MainLayout({
    children, sidebarCollapsed
}: MainLayoutProp) {
	return (
        <div className="vh-100 d-flex flex-column">
            {/* <header className="app-header">
                <div className="container-fluid">
                    <div className="d-flex align-items-center justify-content-between py-2">
                        <div className="fw-bold">
                            Municipal WebGIS
                        </div>

                        <div className="text-muted small">
                            شهرداری و استانداری
                        </div>
                    </div>
                </div>
            </header> */}

            <main className={`app-shell ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
            {/* <main className={`flex-grow-1 overflow-hidden ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}> */}
                {children}
            </main>

            <footer className="app-footer">
                <span>© ۲۰۲۶ تمامی حقوق محفوظ است</span>
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