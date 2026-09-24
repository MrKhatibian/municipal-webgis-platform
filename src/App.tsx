import { useState } from 'react';

import MainLayout from './app/layout/MainLayout';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MapContainer from './components/Map/MapContainer';
import PropertyPanel from './components/Property/PropertyPanel';

import MapView from '@arcgis/core/views/MapView';

// interface LayerVisibility {
//     arse: boolean;
//     gozarbandi: boolean;
//     mahdodehShahr: boolean;
// }

function App() {
    // const [layerVisibility, setLayerVisibility] =
    //     useState<LayerVisibility>({
    //         arse: true,
    //         gozarbandi: true,
    //         mahdodehShahr: true
    //     });

    // const handleLayerVisibilityChange = (
    //     layer: keyof LayerVisibility,
    //     visible: boolean
    // ) => {
    //     setLayerVisibility((current) => ({
    //         ...current,
    //         [layer]: visible
    //     }));
    // };

    const [mapView, setMapView] = useState<MapView | null>(null);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <MainLayout sidebarCollapsed={sidebarCollapsed}>
            <Header
                sidebarCollapsed={sidebarCollapsed}
                onToggleSidebar={() => setSidebarCollapsed((current) => !current)}
            />

            <div className="app-content">
                {/* <Sidebar
                    layerVisibility={layerVisibility}
                    onLayerVisibilityChange={handleLayerVisibilityChange}
                /> */}
                <Sidebar
                    mapView={mapView}
                    collapsed={sidebarCollapsed}
                />

                <main className="app-map">
                    {/* <MapContainer layerVisibility={layerVisibility} /> */}
                    <MapContainer onViewReady={setMapView} />
                </main>

                <PropertyPanel />
            </div>

            {/*<footer className="app-statusbar">
                <span>مختصات: ---</span>
                <span>مقیاس: ---</span>
                <span>وضعیت: آماده</span>
            </footer>*/}
        </MainLayout>                            
    );
}

export default App;