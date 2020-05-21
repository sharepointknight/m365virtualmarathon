function showTimezone()
{
    const d = new Date();

    // Get a DateTimeFormat object for the user's current culture (via undefined)
    // Ask specifically for the long-form of the time zone name in the options
    const dtf = Intl.DateTimeFormat(undefined, {timeZoneName: 'long'});

    // Format the date to parts, and pull out the value of the time zone name
    const result = dtf.formatToParts(d).find((part) => part.type == 'timeZoneName').value;

    $("#timezone").text(result);
}
function filterLanguage(b)
{
    if(b.value == "")
    {
        $("li.sz-session--full").show();
    }
    else
    {
        $('[data-categoryname="language"][data-tagid="' + b.value + '"]').closest("li.sz-session--full").show();
        $('[data-categoryname="language"][data-tagid!="' + b.value + '"]').closest("li.sz-session--full").hide();
    }
}
function isContentLoaded()
{
    return $(".sz-sessions--list").length > 0 || $(".sz-tabs").length > 0;
}

$(document).ready(function () {
    showTimezone();
    //<img src="images/English.png" style="width: 20px;float: right;">
});