$(() => {
    // READ DATA
    /*$.getJSON("json/data.json").done((data) => {

    });*/
    $('.hide').hide();
    $('nav>svg').on('click', () => {
        $('.hide').toggle(1000);
    });
    $.ajax({
        url: "js/data.json"
    }).done(function (data) {
        $datalisting(data);
    });
    const $datalisting = data => {
        //info = _.sortBy();
        $("#user-listing").loadTemplate('template.html', data, {
            complete: () => {

            }
        });
    }

});