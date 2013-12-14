var schools = new L.LayerGroup();
$.get('data/schools.json', function (data) {
    _.each(data, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('school.png')}).bindPopup(datum.school).addTo(schools);
    });
});

var hospitals = new L.LayerGroup();
$.get('data/hospitals.json', function (data) {
    _.each(data, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('hospital.png')}).bindPopup(datum.name).addTo(hospitals);
    });
});

var subways = new L.LayerGroup();
$.get('data/subways.json', function (data) {
    _.each(data, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('subway.png')}).bindPopup(datum.name).addTo(subways);
    });
});

var toilets = new L.LayerGroup();
$.get('data/toilets.json', function (data) {
    _.each(data, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('toilet.png')}).bindPopup(datum.area).addTo(toilets);
    });
});

var trafficSignals = new L.LayerGroup();
$.get('data/trafficsignals.json', function (data) {
    _.each(data, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('signal.png')}).bindPopup(datum.area).addTo(trafficSignals);
    });
});

var parks = new L.LayerGroup();
$.get('data/parks.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIcons('book', 'green', 'fa')}).bindPopup(datum.name).addTo(parks);
    });
});

var libraries = new L.LayerGroup();
$.get('data/libraries.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIcons('book', 'orange', 'fa')}).bindPopup(datum.name).addTo(libraries);
    });
});

function getIcons(iconName, color, prefix) {
    return L.AwesomeMarkers.icon({
        icon: iconName,
        prefix: prefix,
        iconSize: [38, 95],
        markerColor: color
    });
};

function getIconImg(iconName) {
    return L.icon({iconUrl: 'images/' + iconName, shadowUrl: 'images/marker-shadow.png', iconAnchor: [0, 0], shadowAnchor: [0, 10]})
}


