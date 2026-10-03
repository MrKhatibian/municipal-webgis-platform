
export const mapConfig = {
    basemap: 'osm',
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
            codeNosazi: "Code_nosazi",
            karbari: "KarbariM",
            }            
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