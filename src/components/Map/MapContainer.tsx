import { useEffect, useRef } from 'react';

import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'

import { mapConfig } from '../../config/mapConfig'

interface LayerVisibility {
    arse: boolean,
    gozarbandi: boolean,
    mahdodehShahr: boolean
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

        const arse = new FeatureLayer({
            url: `${mapConfig.featureServerUrl}/${mapConfig.featureServiceId.arse}`,
            title: "عرصه",
            visible: layerVisibility.arse
        });
        const gozarbandi = new FeatureLayer({
            url: `${mapConfig.featureServerUrl}/${mapConfig.featureServiceId.gozarbandi}`,
            title: "گذر بندی",
            visible: layerVisibility.gozarbandi
        });
        const mahdodehShahr = new FeatureLayer({
            url: `${mapConfig.featureServerUrl}/${mapConfig.featureServiceId.mahdodehShahr}`,
            title: "محدوده شهر",
            visible: layerVisibility.mahdodehShahr
        });

        map.addMany([arse, gozarbandi, mahdodehShahr]);

        return () => {
            view.destroy();
        };
    },[]);    

    return <div ref={mapDiv} className="map-container" />;

}