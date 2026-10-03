import Basemap from '@arcgis/core/Basemap';
import ImageryLayer from '@arcgis/core/layers/ImageryLayer';
import satellighteThumbnail from '../assets/images/SatelliteImage.png'
const basemap = new Basemap({
    title: "StatellightImage",
    id: "customSatellite",
    thumbnailUrl: satellighteThumbnail,
    baseLayers: [
        new ImageryLayer({
            url: "http://yourServer:6080/arcgis/rest/services/yourService/ImageServer",
        }),
    ],
})

export const mapConfig = {
    basemap: {
        online: 'osm',
        local: basemap
    },
    center: [46.17, 37.39] as [number, number],
    zoom: 13,
    spatialReference: 32638,

    mapServerUrl: "http://yourServer:6080/arcgis/rest/services/yourService/MapServer",    
    featureServerUrl: "http://yourServer:6080/arcgis/rest/services/yourService/FeatureServer",
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