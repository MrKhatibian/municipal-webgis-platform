import { useEffect, useRef } from 'react';

import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Graphic from '@arcgis/core/Graphic';


import { mapConfig } from '../../config/mapConfig';

interface MapContainerProps {    
    onViewReady: (view: MapView) => void;
    onPropertySelected: (graphic: Graphic | null) => void;
    selectedProperty: Graphic | null;
}

export default function MapContainer({    
    onViewReady, onPropertySelected, selectedProperty
}: MapContainerProps) {
    const mapDiv = useRef<HTMLDivElement>(null);

    const mapRef = useRef<Map | null>(null);
    const viewRef = useRef<MapView | null>(null);
    const arseFLayerRef = useRef<FeatureLayer | null>(null);
    
    const highlightHandle = useRef<{ remove: () => void } | null>(null);

    useEffect(() => {
        if (!mapDiv.current) {
            return;
        }        

        const arseFL = new FeatureLayer({
            url: `${mapConfig.featureServerUrl}/${mapConfig.layers.arse.serviceId}`,
            title: "عرصه",
            outFields: ["*"]
        });
        arseFLayerRef.current = arseFL;

        const gozarbandiFL = new FeatureLayer({
            url: `${mapConfig.featureServerUrl}/${mapConfig.layers.gozarbandi.serviceId}`,
            title: "گذر بندی",            
        });

        const mahdodehShahrFL = new FeatureLayer({
            url: `${mapConfig.featureServerUrl}/${mapConfig.layers.mahdodehShahr.serviceId}`,
            title: "محدوده شهر",            
        });

        const map = new Map({
            basemap: mapConfig.basemap,
            layers: [
                mahdodehShahrFL,
                arseFL,
                gozarbandiFL
            ]
        });        
        mapRef.current = map;

        const view = new MapView({
            container: mapDiv.current,
            map,
            center: mapConfig.center,
            zoom: mapConfig.zoom,
        });        
        viewRef.current = view;        

        onViewReady(view);

        view.popupEnabled = false;

        // Click Handle
        const clickHandle = view.on('click', async (event) => {
            try {                
                const response = await view.hitTest((event), {
                    include: arseFL,
                });
                const featureResult = response.results.find(
                    (result) => result.type === 'graphic'
                );
                if (!featureResult || !('graphic' in featureResult)) {
                    onPropertySelected(null);                    
                    return
                }
                const graphic = featureResult.graphic;
                onPropertySelected(graphic);

                const layerView = await view.whenLayerView(arseFL);
                highlightHandle.current?.remove();
                highlightHandle.current = layerView.highlight(graphic);
            } catch (err) {
                console.error("Identify failed", err);
                onPropertySelected(null);
            }
        });

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
            clickHandle.remove();
            highlightHandle.current?.remove();
            highlightHandle.current = null;
            view.destroy();
            mapRef.current = null;    
        };
    }, [onViewReady, onPropertySelected]);    

    useEffect(() => {               
        if (!selectedProperty) {
            highlightHandle.current?.remove();
            highlightHandle.current = null;
            return;
        }        
    }, [selectedProperty]);

    return <div ref={mapDiv} className="map-container" />;  
}