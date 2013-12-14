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
