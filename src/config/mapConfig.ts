import Basemap from '@arcgis/core/Basemap';
import ImageryLayer from '@arcgis/core/layers/ImageryLayer';
import satellighteThumbnail from '../assets/images/satelliteImage.png';

const baseMapUrl = import.meta.env.VITE_ARCGIS_IMAGERYLAYER_URL;
const mapServerUrl = import.meta.env.VITE_ARCGIS_MAPSERVER_URL;
const featureServerUrl = import.meta.env.VITE_ARCGIS_FEATURESERVER_URL;

const basemap = new Basemap({
    title: "StatellightImage",
    id: "customSatellite",
    thumbnailUrl: satellighteThumbnail,
    baseLayers: [
        new ImageryLayer({            
            url: baseMapUrl,
        }),
    ],
});

export const mapConfig = {    
    basemap: {
        online: 'osm',
        local: basemap
    },
    center: [46.24, 37.38] as [number, number], // X,Y
    //center: [5149039.17, 4493258.86] as [number, number], // X,Y
    zoom: 12,
    spatialReference: 4326, // WGS84
    //spatialReference: 32638, // UTM N38
    
    mapServerUrl: mapServerUrl,    
    featureServerUrl: featureServerUrl,

    layers: {
        arse: {
            serviceId: 1,            
            title: 'عرصه',
            minScale: 5000,
            fields: {
                codeNosazi: {
                    name: "Code_nosazi",
                    title: "کد نوسازی",
                },
                karbari: {
                    name: "KarbariM",
                    title: "کاربری",
                },
            },
        },
        mabar: {
            serviceId: 2,
            title: 'معبر',
        },
        mahdodehShahr: {
            serviceId: 5,
            title: 'محدوده شهر',
        }
    }
}