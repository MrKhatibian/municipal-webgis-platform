export default function LayerControl() {
    return (
        <div>
            <div className="fw-semibold mb-2">
                لایه‌ها
            </div>

            <div className="form-check mb-2">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="layer-melk"
                    defaultChecked
                />
                <label className="form-check-label" htmlFor="layer-melk">
                    عرصه
                </label>
            </div>

            <div className="form-check mb-2">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="layer-eayan"
                    defaultChecked
                />
                <label className="form-check-label" htmlFor="layer-eayan">
                    اعیان
                </label>
            </div>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="layer-tarh"
                    defaultChecked
                />
                <label className="form-check-label" htmlFor="layer-tarh">
                    طرح تفصیلی
                </label>
            </div>
        </div>
    );
}