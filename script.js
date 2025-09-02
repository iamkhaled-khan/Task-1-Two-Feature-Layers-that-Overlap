require([
  "esri/views/MapView",
  "esri/WebMap"
], function (MapView, WebMap) {

  // Create WebMap from ArcGIS Online portal item
  const webmap = new WebMap({
    portalItem: {
      id: "f84e725de2cf43c195a8584bcd86fc2c" // Replace with your WebMap ID
    }
  });

  // Create MapView
  const view = new MapView({
    container: "viewDiv",
    map: webmap
  });

});