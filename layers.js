var schools = new L.LayerGroup();
schoolComplaints = new L.MarkerClusterGroup({iconCreateFunction: function(cluster) {
    return new L.DivIcon({className: 'school-complaints', iconAnchor: [-5,-30], html: '<b>'+ cluster.getChildCount()+'</b>'})
}});

$.get('data/schools.json', function (data) {
    var schoolsData = fetch('schools', data);
    _.each(schoolsData, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('school.png')}).bindPopup(datum.school + commentsTemplate(datum.id, "schools")).addTo(schools);
        addCommentsMarker(datum, schoolComplaints, "school-complaints");
    });
    schoolComplaints.addTo(schools);
});

var hospitals = new L.LayerGroup();
hospitalComplaints= new L.MarkerClusterGroup({iconCreateFunction: function(cluster) {
    return new L.DivIcon({className: 'hospital-complaints', iconAnchor: [-5,-30], html: '<b>'+ cluster.getChildCount()+'</b>'})
}});
$.get('data/hospitals.json', function (data) {
    var hospitalsData = fetch('hospitals', data);
    _.each(hospitalsData, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('hospital.png')}).bindPopup(datum.Name + commentsTemplate(datum.id, "hospitals")).addTo(hospitals);
        addCommentsMarker(datum, hospitalComplaints,"hospital-complaints");
    });
    hospitalComplaints.addTo(hospitals);
});

var subways = new L.LayerGroup();
subwayComplaints = new L.MarkerClusterGroup({iconCreateFunction: function(cluster) {
    return new L.DivIcon({className: 'subway-complaints', iconAnchor: [-5,-30], html: '<b>'+ cluster.getChildCount()+'</b>'})
}});
$.get('data/subways.json', function (data) {
    var subwayData = fetch('subways', data);
    _.each(subwayData, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('subway.png')}).bindPopup(datum.name + commentsTemplate(datum.id, "subways")).addTo(subways);
        addCommentsMarker(datum, subwayComplaints, 'subway-complaints');
    });
    subwayComplaints.addTo(subways);
});

var toilets = new L.LayerGroup();
toiletComplaints = new L.MarkerClusterGroup({iconCreateFunction: function(cluster) {
    return new L.DivIcon({className: 'toilet-complaints', iconAnchor: [-5,-30], html: '<b>'+ cluster.getChildCount()+'</b>'})
}});
$.get('data/toilets.json', function (data) {
    var toiletsData = fetch('toilets', data);
    _.each(toiletsData, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('toilet.png')}).bindPopup(datum.area + commentsTemplate(datum.id, "toilets")).addTo(toilets);
        addCommentsMarker(datum, toiletComplaints, 'toilet-complaints');
    });
    toiletComplaints.addTo(toilets);
});

var trafficSignals = new L.LayerGroup();
signalComplaints = new L.MarkerClusterGroup({iconCreateFunction: function(cluster) {
    return new L.DivIcon({className: 'signal-complaints', iconAnchor: [-5,-30], html: '<b>'+ cluster.getChildCount()+'</b>'})
}});
$.get('data/trafficsignals.json', function (data) {
    var trafficSignalsData = fetch('trafficSignals', data);
    _.each(trafficSignalsData, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('signal.png')}).bindPopup(datum.area + commentsTemplate(datum.id, "trafficSignals")).addTo(trafficSignals);
        addCommentsMarker(datum, signalComplaints, 'signal-complaints');
    });
    signalComplaints.addTo(trafficSignals);
});

var parks = new L.LayerGroup();
parkComplaints = new L.MarkerClusterGroup({iconCreateFunction: function(cluster) {
    return new L.DivIcon({className: 'park-complaints', iconAnchor: [-5,-30], html: '<b>'+ cluster.getChildCount()+'</b>'})
}});
$.get('data/parks.json', function (data) {
    var parksData = fetch('parks', data);
    _.each(parksData, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('park.png')}).bindPopup(datum.name + commentsTemplate(datum.id, "parks")).addTo(parks);
        addCommentsMarker(datum, parkComplaints, 'park-complaints');
    });
    parkComplaints.addTo(parks);
});

var libraries = new L.LayerGroup();
libraryComplaints = new L.MarkerClusterGroup({iconCreateFunction: function(cluster) {
    return new L.DivIcon({className: 'library-complaints', iconAnchor: [-5,-30], html: '<b>'+ cluster.getChildCount()+'</b>'})
}});
$.get('data/libraries.json', function (data) {
    var librariesData = fetch('libraries', data);
    _.each(librariesData, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('library.png')}).bindPopup(datum.name + commentsTemplate(datum.id, "libraries")).addTo(libraries);
        addCommentsMarker(datum, libraryComplaints, 'library-complaints');
    });
    libraryComplaints.addTo(libraries);
});

var lakes = new L.LayerGroup();
lakeComplaints = new L.MarkerClusterGroup({iconCreateFunction: function(cluster) {
    return new L.DivIcon({className: 'lake-complaints', iconAnchor: [-5,-30], html: '<b>'+ cluster.getChildCount()+'</b>'})
}});
$.get('data/lakes.json', function (data) {
    var lakesData = fetch('lakes', data);
    _.each(lakesData, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('lake.png')}).bindPopup(datum.name + commentsTemplate(datum.id, "lakes")).addTo(lakes);
        addCommentsMarker(datum, lakeComplaints,'lake-complaints');
    });
    lakeComplaints.addTo(lakes);
});

var corporationOffices = new L.LayerGroup();
officeComplaints = new L.MarkerClusterGroup({iconCreateFunction: function(cluster) {
    return new L.DivIcon({className: 'office-complaints', iconAnchor: [-5,-30], html: '<b>'+ cluster.getChildCount()+'</b>'})
}});
$.get('data/corporationoffices.json', function(data) {
    var corporationOfficesData = fetch('corporationOffices', data);
    _.each(corporationOfficesData, function (datum) {
        L.marker([datum.latitude, datum.longitude], {icon: getIconImg('corporation.png')}).bindPopup(datum.name + commentsTemplate(datum.id, "corporationOffices")).addTo(corporationOffices);
        addCommentsMarker(datum, officeComplaints, 'office-complaints');
    });
    officeComplaints.addTo(corporationOffices);
});

function addCommentsMarker(datum, layerData, className) {
    if (datum.comments != undefined) {
        createComplaintsMarker(datum, className).addTo(layerData);
    }
}

function createComplaintsMarker(datum, classname) {
    return L.marker([datum.latitude, datum.longitude], {icon: L.divIcon({className: classname, html: datum.comments.length, iconAnchor: [-5, -30]})})
        .bindPopup(datum.comments.join("<br/>"));
}

function getIconImg(iconName) {
    return L.icon({iconUrl: 'images/' + iconName, shadowUrl: 'images/marker-shadow.png', iconAnchor: [0, 0], shadowAnchor: [0, 10]})
}

function getCommentsHtmlTags() {
    return "<p>Comments: <textarea rows=3 cols=20></textarea></p><p><button>Save</button></p>";
}


