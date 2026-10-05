import { useState } from 'react';

import MainLayout from './app/layout/MainLayout';
import Header from './components/Header/Header';
//import Sidebar from './components/Sidebar/Sidebar';
import MapContainer from './components/Map/MapContainer';
import PropertyPanel from './components/Property/PropertyPanel';

import MapView from '@arcgis/core/views/MapView';
import Graphic from '@arcgis/core/Graphic';

import ToastContainer from './components/Notification/ToastContainer';
import { useNotification } from './hooks/useNotification';

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
    const [selectedProperty, setSelectedProperty] = useState<Graphic | null>(null);

    const notify = useNotification();    

    const handleToggleSidebar = () => {
        setSidebarCollapsed((current) => !current);
    }

    const handleCloseProperty = () => {
        setSelectedProperty(null);        
    }

    return (
        <>
            <MainLayout sidebarCollapsed={sidebarCollapsed}>
                <Header
                    sidebarCollapsed={sidebarCollapsed}
                    onToggleSidebar={handleToggleSidebar}
                />

                <div className="app-content">
                    {/* <Sidebar
                    layerVisibility={layerVisibility}
                    onLayerVisibilityChange={handleLayerVisibilityChange}
                    /> 
                    <Sidebar
                        mapView={mapView}
                        collapsed={sidebarCollapsed}
                        onToggleSidebar={handleToggleSidebar}
                    />*/}

                    <main className="app-map">
                        {/* <MapContainer layerVisibility={layerVisibility} /> */}
                        <MapContainer
                            onViewReady={setMapView}
                            onPropertySelected={setSelectedProperty}
                            selectedProperty={selectedProperty}
                        />
                    </main>

                    <PropertyPanel
                        property={selectedProperty}
                        onClose={handleCloseProperty}
                    />
                </div>

                {/*<footer className="app-statusbar">
                <span>مختصات: ---</span>
                <span>مقیاس: ---</span>
                <span>وضعیت: آماده</span>
            </footer>*/}
            </MainLayout>
            <ToastContainer />
        </>                
    );
}

export default App;