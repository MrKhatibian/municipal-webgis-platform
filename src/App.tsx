import MainLayout from './app/layout/MainLayout';

function App() {
    return (
        <MainLayout>
            <div className="h-100 d-flex">
                <aside className="border-end bg-light p-3" style={{ width: '320px' }}>
                    <h6>ابزارها</h6>

                    <div className="mb-3">
                        <label className="form-label">
                            کد نوسازی
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

                    <hr />

                    <h6>لایه‌ها</h6>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="melkLayer"
                            defaultChecked
                        />
                        <label className="form-check-label" htmlFor="melkLayer">
                            عرصه
                        </label>
                    </div>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="eayanLayer"
                            defaultChecked
                        />
                        <label className="form-check-label" htmlFor="eayanLayer">
                            اعیان
                        </label>
                    </div>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="tarhLayer"
                            defaultChecked
                        />
                        <label className="form-check-label" htmlFor="tarhLayer">
                            طرح تفصیلی
                        </label>
                    </div>
                </aside>

                <section className="flex-grow-1 bg-secondary d-flex align-items-center justify-content-center">
                    <span className="text-white">
                        Map will be here
                    </span>
                </section>
            </div>
        </MainLayout>
    );
}

export default App;