export default function PropertySearch() {
    return (
        <div>
            <label className="form-label fw-semibold">
                جستجوی ملک
            </label>

            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="کد نوسازی"
                />

                <button className="btn btn-primary">
                    جستجو
                </button>
            </div>
        </div>
    );
}