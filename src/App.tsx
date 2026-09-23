import { useState } from 'react';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MapContainer from './components/Map/MapContainer';
import PropertyPanel from './components/Property/PropertyPanel';

interface LayerVisibility {
    arse: boolean;
    gozarbandi: boolean;
    mahdodehShahr: boolean;
}

function App() {
    const [layerVisibility, setLayerVisibility] =
        useState<LayerVisibility>({
            arse: true,
            gozarbandi: true,
            mahdodehShahr: true
        });

    const handleLayerVisibilityChange = (
        layer: keyof LayerVisibility,
        visible: boolean
    ) => {
        setLayerVisibility((current) => ({
            ...current,
            [layer]: visible
        }));
    };

    return (
        <div className="app">
            <Header />

            <div className="app-content">
                <Sidebar
                    layerVisibility={layerVisibility}
                    onLayerVisibilityChange={handleLayerVisibilityChange}
                />

                <main className="app-map">
                    <MapContainer layerVisibility={layerVisibility} />
                </main>

                <PropertyPanel />
            </div>

            <footer className="app-statusbar">
                <span>مختصات: ---</span>
                <span>مقیاس: ---</span>
                <span>وضعیت: آماده</span>
            </footer>
        </div>
    );
}

export default App;