import { useEffect, useRef } from 'react';

import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

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

        const arseML = new MapImageLayer({
            url: `${mapConfig.mapServerUrl}/${mapConfig.serviceId.arse}`,
            title: "عرصه",
            visible: layerVisibility.arse
        });
        const gozarbandiML = new MapImageLayer({
            url: `${mapConfig.mapServerUrl}/${mapConfig.serviceId.gozarbandi}`,
            title: "گذر بندی",
            visible: layerVisibility.gozarbandi
        });
        const mahdodehShahrML = new MapImageLayer({
            url: `${mapConfig.mapServerUrl}/${mapConfig.serviceId.mahdodehShahr}`,
            title: "محدوده شهر",
            visible: layerVisibility.mahdodehShahr
        });

        const arseFL = new FeatureLayer({
            url: `${mapConfig.featureServerUrl}/${mapConfig.serviceId.arse}`,
            title: "عرصه",
            visible: layerVisibility.arse
        });
        const gozarbandiFL = new FeatureLayer({
            url: `${mapConfig.featureServerUrl}/${mapConfig.serviceId.gozarbandi}`,
            title: "گذر بندی",
            visible: layerVisibility.gozarbandi
        });
        const mahdodehShahrFL = new FeatureLayer({
            url: `${mapConfig.featureServerUrl}/${mapConfig.serviceId.mahdodehShahr}`,
            title: "محدوده شهر",
            visible: layerVisibility.mahdodehShahr
        });

        const map = new Map({
            basemap: mapConfig.basemap,
            layers: [
                mahdodehShahrFL,
                arseFL,
                gozarbandiFL
            ]
        });
        //map.addMany([arseFL, gozarbandiFL, mahdodehShahrFL]);

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