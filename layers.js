var schools = new L.LayerGroup();
schoolComplaints = new L.MarkerClusterGroup({iconCreateFunction: function(cluster) {
    return new L.DivIcon({className: 'school-complaints', iconAnchor: [-5,-30], html: '<b>'+ cluster.getChildCount()+'</b>'})
}});

$.get('data/schools.json', function (data) {
    _.each(data, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('school.png')}).bindPopup(datum.school + commentsTemplate(datum.id, "schools")).addTo(schools);
        if(datum.complaints != undefined) {
            createComplaintsMarker(datum, "school-complaints").addTo(schoolComplaints);
        }
    });
    schoolComplaints.addTo(schools);
});

var hospitals = new L.LayerGroup();
hospitalComplaints= new L.MarkerClusterGroup({iconCreateFunction: function(cluster) {
    return new L.DivIcon({className: 'hospital-complaints', iconAnchor: [-5,-30], html: '<b>'+ cluster.getChildCount()+'</b>'})
}});
$.get('data/hospitals.json', function (data) {
    _.each(data, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('hospital.png')}).bindPopup(datum.Name + commentsTemplate(datum.id, "hospitals")).addTo(hospitals);
        if(datum.complaints != undefined) {
            createComplaintsMarker(datum,"hospital-complaints").addTo(hospitals);
        }
    });
});

var subways = new L.LayerGroup();
subwayComplaints = new L.MarkerClusterGroup({iconCreateFunction: function(cluster) {
    return new L.DivIcon({className: 'subway-complaints', iconAnchor: [-5,-30], html: '<b>'+ cluster.getChildCount()+'</b>'})
}});
$.get('data/subways.json', function (data) {
    _.each(data, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('subway.png')}).bindPopup(datum.name + commentsTemplate(datum.id, "subways")).addTo(subways);
    });
});

var toilets = new L.LayerGroup();
toiletComplaints = new L.MarkerClusterGroup({iconCreateFunction: function(cluster) {
    return new L.DivIcon({className: 'toilet-complaints', iconAnchor: [-5,-30], html: '<b>'+ cluster.getChildCount()+'</b>'})
}});
$.get('data/toilets.json', function (data) {
    _.each(data, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('toilet.png')}).bindPopup(datum.area + commentsTemplate(datum.id, "toilets")).addTo(toilets);
    });
});

var trafficSignals = new L.LayerGroup();
signalComplaints = new L.MarkerClusterGroup({iconCreateFunction: function(cluster) {
    return new L.DivIcon({className: 'signal-complaints', iconAnchor: [-5,-30], html: '<b>'+ cluster.getChildCount()+'</b>'})
}});
$.get('data/trafficsignals.json', function (data) {
    _.each(data, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('signal.png')}).bindPopup(datum.area + commentsTemplate(datum.id, "trafficSignals")).addTo(trafficSignals);
    });
});

var parks = new L.LayerGroup();
parkComplaints = new L.MarkerClusterGroup({iconCreateFunction: function(cluster) {
    return new L.DivIcon({className: 'park-complaints', iconAnchor: [-5,-30], html: '<b>'+ cluster.getChildCount()+'</b>'})
}});
$.get('data/parks.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('park.png')}).bindPopup(datum.name + commentsTemplate(datum.id, "parks")).addTo(parks);
    });
});

var libraries = new L.LayerGroup();
libraryComplaints = new L.MarkerClusterGroup({iconCreateFunction: function(cluster) {
    return new L.DivIcon({className: 'library-complaints', iconAnchor: [-5,-30], html: '<b>'+ cluster.getChildCount()+'</b>'})
}});
$.get('data/libraries.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('library.png')}).bindPopup(datum.name + commentsTemplate(datum.id, "libraries")).addTo(libraries);
    });
});

var lakes = new L.LayerGroup();
lakeComplaints = new L.MarkerClusterGroup({iconCreateFunction: function(cluster) {
    return new L.DivIcon({className: 'lake-complaints', iconAnchor: [-5,-30], html: '<b>'+ cluster.getChildCount()+'</b>'})
}});
$.get('data/lakes.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('lake.png')}).bindPopup(datum.name + commentsTemplate(datum.id, "lakes")).addTo(lakes);
    });
});

var corporationOffices = new L.LayerGroup();
officeComplaints = new L.MarkerClusterGroup({iconCreateFunction: function(cluster) {
    return new L.DivIcon({className: 'office-complaints', iconAnchor: [-5,-30], html: '<b>'+ cluster.getChildCount()+'</b>'})
}});
$.get('data/corporationoffices.json', function(data) {
    _.each(data, function(datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('corporation.png')}).bindPopup(datum.name + commentsTemplate(datum.id, "corporationOffices")).addTo(corporationOffices);
    });
});

function createComplaintsMarker(datum, classname) {
    return L.marker([datum.latitude, datum.longitude], {icon: L.divIcon({className: classname, html: datum.complaints.length, iconAnchor: [-5,-30]})})
        .bindPopup(datum.complaints.join("<br/>"));
}

function getIconImg(iconName) {
    return L.icon({iconUrl: 'images/' + iconName, shadowUrl: 'images/marker-shadow.png', iconAnchor: [0, 0], shadowAnchor: [0, 10]})
}

function getCommentsHtmlTags() {
    return "<p>Comments: <textarea rows=3 cols=20></textarea></p><p><button>Save</button></p>";
}


