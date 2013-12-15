var schools = new L.LayerGroup();
$.get('data/schools.json', function (data) {
    _.each(data, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('school.png')}).bindPopup(datum.school + getCommentsHtmlTags()).addTo(schools);
        if(datum.complaints != undefined) {
            createComplaintsMarker(datum).addTo(schools);
        }
    });
});

var hospitals = new L.LayerGroup();
$.get('data/hospitals.json', function (data) {
    _.each(data, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('hospital.png')}).bindPopup(datum.Name).addTo(hospitals);
        if(datum.complaints != undefined) {
            createComplaintsMarker(datum.complaints).addTo(hospitals);
        }
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
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('park.png')}).bindPopup(datum.name).addTo(parks);
    });
});

var libraries = new L.LayerGroup();
$.get('data/libraries.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('library.png')}).bindPopup(datum.name).addTo(libraries);
    });
});

var lakes = new L.LayerGroup();
$.get('data/lakes.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('lake.png')}).bindPopup(datum.name).addTo(lakes);
    });
});

var corporationOffices = new L.LayerGroup();
$.get('data/corporationoffices.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('lake.png')}).bindPopup(datum.name).addTo(corporationOffices);
    });
});

function createComplaintsMarker(datum) {
    return L.marker([datum.latitude, datum.longitude], {icon: L.divIcon({className: 'complaints', html: datum.complaints.length, iconAnchor: [-5,-30]})})
        .bindPopup(datum.complaints.join("<br/>"));
}

function getIconImg(iconName) {
    return L.icon({iconUrl: 'images/' + iconName, shadowUrl: 'images/marker-shadow.png', iconAnchor: [0, 0], shadowAnchor: [0, 10]})
}

function getCommentsHtmlTags() {
    return "<p>Comments: <textarea rows=3 cols=20></textarea></p><p><button>Save</button></p>";
}


