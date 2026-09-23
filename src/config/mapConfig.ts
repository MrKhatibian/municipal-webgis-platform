
export const mapConfig = {
    basemap: 'osm',
    center: [46.17, 37.39] as [number, number],
    zoom: 13,
    spatialReference: 32638,
    featureServerUrl: "http://yourServer:6080/arcgis/rest/services/yourService/FeatureServer",
    featureServiceId: {
        arse: 1,
        gozarbandi: 0,
        mahdodehShahr: 5
    }
}