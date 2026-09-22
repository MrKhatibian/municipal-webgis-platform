import { useEffect, useRef } from 'react';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';


export default function MapContainer() {
    const mapDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mapDiv.current) {
            return;
        }
        const map = new Map({
            basemap: 'osm',
        });

        const view = new MapView({
            container: mapDiv.current,
            map,
            center: [46.17, 37.39],
            zoom: 13,
        });

        return () => {
            view.destroy();
        };
    },[]);    

	return (
        <div className="map-container">
            <div className="map-placeholder">
                Map
            </div>
        </div>
	);
}