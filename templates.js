var commentsTemplate = function (id, type) {
    return "<div class='comments' data-id=" + id + " data-type= " + type + ">" +
        "Type: <select><options><option>Suggestion</option></options><options>Complaint</options></select><br>" +
        "Comments: <textarea></textarea><br>" +
        "<button>Save</button>"+
        "</div>";
}

