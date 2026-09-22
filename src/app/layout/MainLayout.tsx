import type { ReactNode } from 'react';

interface MainLayoutProp {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProp) {
	return (
        <div className="vh-100 d-flex flex-column">
            <header className="border-bottom bg-white">
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
            </header>

            <main className="flex-grow-1 overflow-hidden">
                {children}
            </main>

            <footer className="border-top bg-light">
                <div className="container-fluid py-1">
                    <div className="small text-muted">
                        Municipal WebGIS Platform
                    </div>
                </div>
            </footer>
        </div>
	);
}