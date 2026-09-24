
export const mapConfig = {
    basemap: 'osm',
    center: [46.17, 37.39] as [number, number],
    zoom: 13,
    spatialReference: 32638,

    mapServerUrl: "http://yourServer:6080/arcgis/rest/services/yourService/MapServer",    
    featureServiceId: {
    serviceId: {
        arse: 1,
        gozarbandi: 2,
        mahdodehShahr: 5
    }
}