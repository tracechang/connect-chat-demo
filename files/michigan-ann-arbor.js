$(document).ready(function() {
    // insert uniqname instructions
    var uniqueNameNoteHtml = '<label></label><span>If you do not have a uniqname, please enter "Guest"</span><br>';
    $('#issues\\:customer_username').after(uniqueNameNoteHtml);

    // unbind the form submission
    $('#issues_form').unbind('submit');

    $('#issues_form').submit(function(e) {
        var uniqName = $('#issues\\:customer_username').val();
        if (uniqName == null || uniqName.trim().length == 0) {
            alert('uniqname must be between 3 and 8 characters or "Guest"');
            $('issues\\:customer_username').focus();
            return false;
        } else if (uniqName.length < 3 || uniqName.length > 8) {
            alert('uniqname must be between 3 and 8 characters or "Guest"');
            $('issues\\:customer_username').focus();
            return false;
        } else {
            return true;
        }
    });
});