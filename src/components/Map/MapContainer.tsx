import { useEffect, useRef } from 'react';

import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
//import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

import { mapConfig } from '../../config/mapConfig';

// interface LayerVisibility {
//     arse: boolean,
//     gozarbandi: boolean,
//     mahdodehShahr: boolean
// }

interface MapContainerProps {
    // layerVisibility: LayerVisibility;
    onViewReady: (view: MapView) => void;
}

export default function MapContainer({
    //layerVisibility,
    onViewReady
}: MapContainerProps) {
    const mapDiv = useRef<HTMLDivElement>(null);

    const mapRef = useRef<Map | null>(null);
    // const arseFLayerRef = useRef<FeatureLayer | null>(null);
    // const gozarbandiFlayerRef = useRef<FeatureLayer | null>(null);
    // const mahdodehShahrFlayerRef = useRef<FeatureLayer | null>(null);

    useEffect(() => {
        if (!mapDiv.current) {
            return;
        }        

        // const arseML = new MapImageLayer({
        //     url: `${mapConfig.mapServerUrl}/${mapConfig.serviceId.arse}`,
        //     title: "عرصه",
        //     visible: layerVisibility.arse
        // });
        // const gozarbandiML = new MapImageLayer({
        //     url: `${mapConfig.mapServerUrl}/${mapConfig.serviceId.gozarbandi}`,
        //     title: "گذر بندی",
        //     visible: layerVisibility.gozarbandi
        // });
        // const mahdodehShahrML = new MapImageLayer({
        //     url: `${mapConfig.mapServerUrl}/${mapConfig.serviceId.mahdodehShahr}`,
        //     title: "محدوده شهر",
        //     visible: layerVisibility.mahdodehShahr
        // });

        const arseFL = new FeatureLayer({
            url: `${mapConfig.featureServerUrl}/${mapConfig.serviceId.arse}`,
            title: "عرصه",
            //visible: layerVisibility.arse
        });
        const gozarbandiFL = new FeatureLayer({
            url: `${mapConfig.featureServerUrl}/${mapConfig.serviceId.gozarbandi}`,
            title: "گذر بندی",
            //visible: layerVisibility.gozarbandi
        });
        const mahdodehShahrFL = new FeatureLayer({
            url: `${mapConfig.featureServerUrl}/${mapConfig.serviceId.mahdodehShahr}`,
            title: "محدوده شهر",
            //visible: layerVisibility.mahdodehShahr
        });

        // arseFLayerRef.current = arseFL;
        // gozarbandiFlayerRef.current = gozarbandiFL;
        // mahdodehShahrFlayerRef.current = mahdodehShahrFL;

        const map = new Map({
            basemap: mapConfig.basemap,
            layers: [
                mahdodehShahrFL,
                arseFL,
                gozarbandiFL
            ]
        });
        //map.addMany([arseFL, gozarbandiFL, mahdodehShahrFL]);
        mapRef.current = map;

        const view = new MapView({
            container: mapDiv.current,
            map,
            center: mapConfig.center,
            zoom: mapConfig.zoom,
        });

        onViewReady(view);

        const zoomToLayer = async () => {
            try {
                await mahdodehShahrFL.when();
                if (mahdodehShahrFL.fullExtent) {
                    await view.goTo(mahdodehShahrFL.fullExtent);
                }
            } catch (err) {
                console.error('Failed to zoom to parcel extent:', err);
            }
        }
        zoomToLayer();

        return () => {
            view.destroy();
            mapRef.current = null;
            // arseFLayerRef.current = null;
            // gozarbandiFlayerRef.current = null;
            // mahdodehShahrFlayerRef.current = null;
        };
    }, [onViewReady]);    

    // useEffect(() => {
    //     if (arseFLayerRef.current) {
    //         arseFLayerRef.current.visible = layerVisibility.arse;
    //     }
    //     if (gozarbandiFlayerRef.current) {
    //         gozarbandiFlayerRef.current.visible = layerVisibility.gozarbandi;
    //     }
    //     if (mahdodehShahrFlayerRef.current) {
    //         mahdodehShahrFlayerRef.current.visible = layerVisibility.mahdodehShahr;
    //     }
    // }, [layerVisibility]);

    return <div ref={mapDiv} className="map-container" />;

}