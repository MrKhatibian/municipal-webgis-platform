import PropertySearch from '../Search/PropertySearch';
import LayerControl from '../Layers/LayerControl';

interface LayerVisibility {
    arse: boolean;
    gozarbandi: boolean;
    mahdodehShahr: boolean;
}

interface SidebarProps {
    layerVisibility: LayerVisibility;
    onLayerVisibilityChange: (
        layer: keyof LayerVisibility,
        visible: boolean
    ) => void
}

export default function Sidebar({
    layerVisibility, onLayerVisibilityChange
}: SidebarProps) {
	return (
        <aside className="app-sidebar">
            <div className="p-3">
                <PropertySearch />

                <hr />

                <LayerControl
                    layerVisibility={layerVisibility}
                    onLayerVisibilityChange={onLayerVisibilityChange}
                />

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