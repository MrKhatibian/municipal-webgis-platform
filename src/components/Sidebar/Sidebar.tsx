import PropertySearch from '../Search/PropertySearch';
import LayerControl from '../Layers/LayerControl';

export default function Sidebar() {
	return (
        <aside className="app-sidebar">
            <div className="p-3">
                <PropertySearch />

                <hr />

                <LayerControl />

                <hr />

                <div className="fw-semibold mb-2">
                    ابزارها
                </div>

                <div className="d-grid gap-2">
                    <button className="btn btn-outline-secondary">
                        اندازه‌گیری
                    </button>

                    <button className="btn btn-outline-secondary">
                        چاپ نقشه
                    </button>
                </div>
            </div>
        </aside>
	);
}