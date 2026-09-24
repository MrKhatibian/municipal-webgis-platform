import PropertySearch from '../Search/PropertySearch';
import LayerControl from '../Layers/LayerControl';
import type MapView from '@arcgis/core/views/MapView';

// interface LayerVisibility {
//     arse: boolean;
//     gozarbandi: boolean;
//     mahdodehShahr: boolean;
// }

// interface SidebarProps {
//     layerVisibility: LayerVisibility;
//     onLayerVisibilityChange: (
//         layer: keyof LayerVisibility,
//         visible: boolean
//     ) => void
// }
interface SidebarProps {
    mapView: MapView | null;
}

export default function Sidebar({
    // layerVisibility, onLayerVisibilityChange
    mapView
}: SidebarProps) {
	return (
        <aside className="app-sidebar">
            <div className="p-3">
                <PropertySearch />

                <hr />

                {/* <LayerControl
                    layerVisibility={layerVisibility}
                    onLayerVisibilityChange={onLayerVisibilityChange}
                /> */}
                <LayerControl mapView={mapView} />

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