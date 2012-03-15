/*
 * nav bar
 */
$(document).bind('section.change', function (event, section) {
    $('section').addClass('hide');
    $(section).removeClass('hide');

    $('#navbar-top li').removeClass('active');
    $('#navbar-top li#nav-'+$(section).attr('id')).addClass('active');
});

$('#navbar-top li').click(function (event) {
    section = $('a', event.currentTarget).attr('href');
    if (section) {
        $(document).trigger('section.change', section);
    }
});

/*
 * settings
 */
$('#set-hosts-next').click(function () {
    $('#set-hosts').collapse('hide');
    $('#set-etc1').collapse('show');
});

$('#set-etc1-next').click(function () {
    $('#set-etc1').collapse('hide');
    $('#set-etc2').collapse('show');
});

$('#set-etc2-next').click(function () {
    $('#set-etc2').collapse('hide');
});
