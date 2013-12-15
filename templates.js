var commentsTemplate = function (id, type) {
    return "<hr><div class='comments' data-id=" + id + " data-type= " + type + ">" +
        "Type: <select><options><option>Complaint</option><option>Suggestion</option></options></select><br>" +
        "<textarea rows=4 id='comment'></textarea><br>" +
        "<button class='saveBtn'>Save</button>"+
        "</div>";
}

$(document).on('click', '.saveBtn', function(event) {
    var btn = $(event.currentTarget);
    el = btn.closest('.comments');
    var type = el.data('type');
    var id = el.data('id');
    var comment = el.find('textarea').val();
    var data = fetch(type);
    var currentDatum = _.find(data, function (datum) {
        return datum.id === id;
    });
    if(currentDatum.comments == undefined)
        currentDatum.comments = [];
    currentDatum.comments.push(comment);
    save(type, data);
    btn.replaceWith("Thank you!");
});

var save = function (name, value) {
    localStorage[name] = JSON.stringify(value);
}

var fetch = function (name, defaultValue) {
    if (localStorage[name] == undefined) {
        save(name, defaultValue);
    }
    return JSON.parse(localStorage[name]);
}

var newMarker = function(){
    return "<form>Name:<input type='text'><button>Save</button></form>";
}
