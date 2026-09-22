interface PropertyPanelProps{
    visible?: boolean;
}

export default function PropertyPanel({
    visible = false,
}: PropertyPanelProps) {
    if (!visible) {
        return null;
    }

    return (
        <aside className="property-panel">
            <div className="p-3">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <h6 className="mb-0">
                        اطلاعات ملک
                    </h6>

                    <button className="btn btn-sm btn-outline-secondary">
                        ×
                    </button>
                </div>

                <div className="mb-3">
                    <div className="text-muted small">
                        کد نوسازی
                    </div>
                    <div className="fw-semibold">
                        -
                    </div>
                </div>

                <div className="mb-3">
                    <div className="text-muted small">
                        کاربری
                    </div>
                    <div className="fw-semibold">
                        -
                    </div>
                </div>

                <div className="mb-3">
                    <div className="text-muted small">
                        مساحت
                    </div>
                    <div className="fw-semibold">
                        -
                    </div>
                </div>

                <hr />

                <div className="fw-semibold mb-2">
                    طرح تفصیلی
                </div>

                <div className="text-muted">
                    اطلاعاتی انتخاب نشده است.
                </div>
            </div>
        </aside>
    );
}

    