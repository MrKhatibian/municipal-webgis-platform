import { useEffect, useRef } from 'react';

import Map from '@arcgis/core/Map';
import type MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Graphic from '@arcgis/core/Graphic';
import Viewpoint from '@arcgis/core/Viewpoint';

import { mapConfig } from '../../config/mapConfig';

interface MapContainerProps {
    onViewReady: (view: MapView) => void;
    onPropertySelected: (graphic: Graphic | null) => void;
    selectedProperty: Graphic | null;
}

export default function MapContainer({
    onViewReady, onPropertySelected, selectedProperty
}: MapContainerProps) {
    const mapElRef = useRef<HTMLArcgisMapElement>(null);
    const homeRef = useRef<HTMLArcgisHomeElement>(null);
    const highlightHandle = useRef<{ remove: () => void } | null>(null);

    useEffect(() => {
        const mapEl = mapElRef.current;
        if (!mapEl) return;

        let disposed = false;
        let clickHandle: { remove: () => void } | null = null;

        const arseFL = new FeatureLayer({
            url: `${mapConfig.featureServerUrl}/${mapConfig.layers.arse.serviceId}`,
            title: 'عرصه',
            outFields: ['*'],
        });
        const gozarbandiFL = new FeatureLayer({
            url: `${mapConfig.featureServerUrl}/${mapConfig.layers.gozarbandi.serviceId}`,
            title: 'گذر بندی',
        });
        const mahdodehShahrFL = new FeatureLayer({
            url: `${mapConfig.featureServerUrl}/${mapConfig.layers.mahdodehShahr.serviceId}`,
            title: 'محدوده شهر',
        });

        mapEl.map = new Map({
            basemap: mapConfig.basemap,
            layers: [mahdodehShahrFL, arseFL, gozarbandiFL],
        });

        const init = async () => {
            await mapEl.componentOnReady();
            await mapEl.viewOnReady();
            if (disposed) return;

            const view = mapEl.view as MapView;
            view.popupEnabled = false;

            onViewReady(view);

            clickHandle = view.on('click', async (event) => {
                try {
                    const response = await view.hitTest(event, { include: arseFL });
                    const featureResult = response.results.find((r) => r.type === 'graphic');
                    if (!featureResult || !('graphic' in featureResult)) {
                        onPropertySelected(null);
                        return;
                    }
                    const graphic = featureResult.graphic;
                    onPropertySelected(graphic);

                    const layerView = await view.whenLayerView(arseFL);
                    highlightHandle.current?.remove();
                    highlightHandle.current = layerView.highlight(graphic);
                } catch (err) {
                    console.error('Identify failed', err);
                    onPropertySelected(null);
                }
            });

            try {
                await mahdodehShahrFL.when();
                if (mahdodehShahrFL.fullExtent) {
                    await view.goTo(mahdodehShahrFL.fullExtent);
                    // Home Extent
                    if (homeRef.current) {
                        homeRef.current.viewpoint = new Viewpoint({
                            targetGeometry: mahdodehShahrFL.fullExtent,
                        });
                    }
                }
            } catch (err) {
                console.error('Failed to zoom to extent:', err);
            }
        };
        init();

        return () => {
            disposed = true;
            clickHandle?.remove();
            highlightHandle.current?.remove();
            highlightHandle.current = null;
        };
    }, [onViewReady, onPropertySelected]);

    useEffect(() => {
        if (!selectedProperty) {
            highlightHandle.current?.remove();
            highlightHandle.current = null;
        }
    }, [selectedProperty]);

    return (
        <div className="map-container">
            <arcgis-map
                ref={mapElRef}                
                center={mapConfig.center.join(',')}
                zoom={mapConfig.zoom}
                style={{ width: '100%', height: '100%', display: 'block' }}
            >
                <arcgis-zoom slot="top-left" />
                <arcgis-home ref={homeRef} slot="top-left" />

                <arcgis-expand slot="top-right" expand-tooltip="لایه‌ها" mode="floating">
                    <arcgis-layer-list />
                </arcgis-expand>

                <arcgis-basemap-toggle slot="bottom-left" nextBasemap="satellite" />
                <arcgis-scale-bar slot="bottom-right" unit="metric" />
            </arcgis-map>
        </div>
    );
}