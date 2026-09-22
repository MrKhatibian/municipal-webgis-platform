export default function Header() {
    return (
        <header className="app-header border-bottom">
            <div className="container-fluid h-100">
                <div className="d-flex align-items-center justify-content-between h-100">
                    <div className="d-flex align-items-center gap-2">
                        <button
                            className="btn btn-outline-secondary d-lg-none"
                            type="button"
                        >
                            ☰
                        </button>

                        <div>
                            <div className="fw-bold">Municipal WebGIS</div>
                            <div className="small text-muted d-none d-md-block">
                                سامانه اطلاعات مکانی شهرداری
                            </div>
                        </div>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                        <span className="badge text-bg-light">
                            شهرداری / استانداری
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}