var commentsTemplate = function (id, type) {
    return "<hr><div class='comments' data-id=" + id + " data-type= " + type + ">" +
        "Type: <select><options><option>Complaint</option><option>Suggestion</option></options></select><br>" +
        "<textarea id='comment'></textarea><br>" +
        "<button>Save</button>"+
        "</div>";
}

