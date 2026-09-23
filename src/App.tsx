import { useState } from 'react';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MapContainer from './components/Map/MapContainer';
import PropertyPanel from './components/Property/PropertyPanel';

function App() {
    const [layerVisibility, setLayerVisibility] = useState({
        melk: true,
        ayan: true,
        tarh: true
    });

    return (
        <div className="app">
            <Header />

            <div className="app-content">
                <Sidebar />

                <main className="app-map">
                    <MapContainer />
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