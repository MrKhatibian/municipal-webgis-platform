import { useState } from 'react';

import MainLayout from './app/layout/MainLayout';

import Header from './components/Header/Header';
import MapContainer from './components/Map/MapContainer';
import PropertyPanel from './components/Property/PropertyPanel';

import Graphic from '@arcgis/core/Graphic';

import ToastContainer from './components/Notification/ToastContainer';

function App() {    
    const [selectedProperty, setSelectedProperty] = useState<Graphic | null>(null);     
    const handleCloseProperty = () => {
        setSelectedProperty(null);        
    }

    return (
        <>            
            <MainLayout >                
                <Header />

                <div className="app-content">                    
                    <main className="app-map">                                                
                        <MapContainer                            
                            onPropertySelected={setSelectedProperty}
                            selectedProperty={selectedProperty}
                        />
                    </main>

                    <PropertyPanel
                        property={selectedProperty}
                        onClose={handleCloseProperty}
                    />
                </div>                
            </MainLayout>
            <ToastContainer />
        </>                
    );
}

export default App;