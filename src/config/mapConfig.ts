
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
            codeNosazi: "Code_nosazi",
            karbari: "KarbariM",
        },
        gozarbandi: {
            serviceId:2,
        },
        mahdodehShahr: {
            serviceId: 5,
        }
    }
}