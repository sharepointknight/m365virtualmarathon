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

$(document).ready(function () {
    showTimezone();
});