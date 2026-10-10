import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import esriConfig from '@arcgis/core/config';
esriConfig.fontsUrl = '/fonts';

import '@arcgis/core/assets/esri/themes/light/main.css';
import '@arcgis/map-components/components/arcgis-map';
import '@arcgis/map-components/components/arcgis-zoom';
import '@arcgis/map-components/components/arcgis-home';
import '@arcgis/map-components/components/arcgis-basemap-toggle';
import '@arcgis/map-components/components/arcgis-scale-bar';
import '@arcgis/map-components/components/arcgis-expand';
import '@arcgis/map-components/components/arcgis-layer-list';
import '@arcgis/map-components/components/arcgis-legend';

import 'bootstrap/dist/css/bootstrap.rtl.min.css';

import '@fontsource-variable/vazirmatn';
import '@fontsource-variable/vazirmatn/wght.css';

import './index.css';
import App from './App.tsx';
import { NotificationProvider } from './app/providers/NotificationProvider.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <NotificationProvider>
            <App />
        </NotificationProvider>    
  </StrictMode>,
)
