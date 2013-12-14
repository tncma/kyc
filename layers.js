var schools = new L.LayerGroup();
$.get('/data/schools.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude]).bindPopup(datum.school).addTo(schools);
    });
});

var hospitals = new L.LayerGroup();
$.get('/data/hospitals.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude]).bindPopup(datum.name).addTo(hospitals);
    });
});

var subways = new L.LayerGroup();
$.get('/data/subways.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude]).bindPopup(datum.name).addTo(subways);
    });
});

var toilets = new L.LayerGroup();
$.get('/data/toilets.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude]).bindPopup(datum.area).addTo(toilets);
    });
});

var trafficSignals = new L.LayerGroup();
$.get('/data/trafficsignals.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude]).bindPopup(datum.area).addTo(trafficSignals);
    });
});


