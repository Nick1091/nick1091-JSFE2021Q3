mapboxgl.accessToken = 'pk.eyJ1IjoibmljazEwOTEiLCJhIjoiY2t1a2E1Z296MWI1dzJ2bm1kNmQ4ZXh5ZSJ9.0NjVgCKLXrlY5OosLl0lzg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v10'
});
const geojson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#000000",
        "marker-size": "medium",
        "marker-symbol": "circle",
        "title": "Louvre Museum"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.3364,
          48.86091
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#000000",
        "marker-size": "medium",
        "marker-symbol": "circle",
        "title": "le jardin des Tuileries"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.3333,
          48.8602
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#000000",
        "marker-size": "medium",
        "marker-symbol": "circle",
        "title": "Cour Carrée"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.3397,
          48.8607
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#000000",
        "marker-size": "medium",
        "marker-symbol": "circle",
        "title": "Arc de Triomphe de l'Étoile"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.333,
          48.8619
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#000000",
        "marker-size": "medium",
        "marker-symbol": "circle",
        "title": "Palais-Royal"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.3365,
          48.8625
        ]
      }
    }
  ]
}

for (const { geometry, properties } of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el).setLngLat(geometry.coordinates).addTo(map);
}