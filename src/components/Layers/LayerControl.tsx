import { useEffect, useRef } from 'react';
import MapView from '@arcgis/core/views/MapView';
// interface LayerVisibility {
//     arse: boolean;
//     gozarbandi: boolean;
//     mahdodehShahr: boolean;
// }

// interface LayerControlProps {
//     layerVisibility: LayerVisibility;
//     onLayerVisibilityChange: (
//         layer: keyof LayerVisibility,
//         visible: boolean
//     ) => void;
// }
interface LayerControlProps {
    mapView: MapView | null;
}

export default function LayerControl({
    // layerVisibility, onLayerVisibilityChange
    mapView
}: LayerControlProps) {

    const layerListRef = useRef<HTMLArcgisLayerListElement>(null);

    useEffect(() => {
        if (!layerListRef.current || !mapView) {
            return;
        }

        layerListRef.current.view = mapView;

    }, [mapView]);

    return (
        <arcgis-layer-list
            ref={layerListRef}
            visibility-appearance="checkbox"
            show-filter
            show-collapse-button
            show-heading
            drag-enabled
        />
    //     <div>
    //         <div className="fw-semibold mb-2">
    //             لایه‌ها
    //         </div>

    //         <div className="form-check mb-2">
    //             <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 id="layer-melk"
    //                 checked={layerVisibility.arse}
    //                 onChange={(event) => onLayerVisibilityChange(
    //                     'arse', event.target.checked
    //                 )}
    //             />
    //             <label className="form-check-label" htmlFor="layer-melk">
    //                 عرصه
    //             </label>
    //         </div>

    //         <div className="form-check mb-2">
    //             <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 id="layer-eayan"
    //                 checked={layerVisibility.gozarbandi}
    //                 onChange={(event) => onLayerVisibilityChange(
    //                     'gozarbandi', event.target.checked
    //                 )}
    //             />
    //             <label className="form-check-label" htmlFor="layer-eayan">
    //                 گذر بندی
    //             </label>
    //         </div>

    //         <div className="form-check">
    //             <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 id="layer-tarh"
    //                 checked={layerVisibility.mahdodehShahr}
    //                 onChange={(event) => onLayerVisibilityChange(
    //                     'mahdodehShahr', event.target.checked
    //                 )}
    //             />
    //             <label className="form-check-label" htmlFor="layer-tarh">
    //                 محدوده شهر
    //             </label>
    //         </div>
    //     </div>
    );
}