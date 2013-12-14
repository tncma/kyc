var schools = new L.LayerGroup();
$.get('data/schools.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIcons('book', 'blue', 'fa')}).bindPopup(datum.school).addTo(schools);
    });
});

var hospitals = new L.LayerGroup();
$.get('data/hospitals.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIcons('medkit', 'red', 'fa')}).bindPopup(datum.Name).addTo(hospitals);
    });
});

var subways = new L.LayerGroup();
$.get('data/subways.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIcons('road', 'purple', 'fa')}).bindPopup(datum.name).addTo(subways);
    });
});

var toilets = new L.LayerGroup();
$.get('data/toilets.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIcons('book', 'red', 'fa')}).bindPopup(datum.area).addTo(toilets);
    });
});

var trafficSignals = new L.LayerGroup();
$.get('data/trafficsignals.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIcons('book', 'red', 'fa')}).bindPopup(datum.area).addTo(trafficSignals);
    });
});

var parks = new L.LayerGroup();
$.get('data/parks.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIcons('book', 'red', 'fa')}).bindPopup(datum.name).addTo(parks);
    });
});

var libraries = new L.LayerGroup();
$.get('data/libraries.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIcons('book', 'red', 'fa')}).bindPopup(datum.name).addTo(libraries);
    });
});

var getIcons = function (iconName, color, prefix) {
  return L.AwesomeMarkers.icon({
       icon: iconName,
       prefix: prefix,
       iconSize: [38, 95],
       markerColor: color
  });
};


