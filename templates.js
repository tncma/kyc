var commentsTemplate = function (id, type) {
    return "<hr><div class='comments' data-id=" + id + " data-type= " + type + ">" +
        "Type: <select><options><option>Complaint</option><option>Suggestion</option></options></select><br>" +
        "<textarea rows=4 id='comment'></textarea><br>" +
        "<button>Save</button>"+
        "</div>";
}

var newMarker = function(){
    return "<form>Name:<input type='text'><button>Save</button></form>";
}