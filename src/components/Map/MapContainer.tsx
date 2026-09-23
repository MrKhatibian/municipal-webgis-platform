import { useEffect, useRef } from 'react';

import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'

import { mapConfig } from '../../config/mapConfig'

interface LayerVisibility {
    gozarbandi: boolean,
    melk: boolean,
    mahdodeh: boolean
}

interface MapContainerProps {
    layerVisibility: LayerVisibility;
}

export default function MapContainer({
    layerVisibility,
}: MapContainerProps) {
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