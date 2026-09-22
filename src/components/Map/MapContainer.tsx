import { useEffect, useRef } from 'react';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import { mapConfig } from '../../config/mapConfig'


export default function MapContainer() {
    const mapDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mapDiv.current) {
            return;
        }
        const map = new Map({
            basemap: mapConfig.basemap,
        });

        const view = new MapView({
            container: mapDiv.current,
            map,
            center: mapConfig.center,
            zoom: mapConfig.zoom,
        });

        return () => {
            view.destroy();
        };
    },[]);    

    return <div ref={mapDiv} className="map-container" />;

}