$(() => {
    // READ DATA
    /*$.getJSON("json/data.json").done((data) => {

    });*/
    $('.hide').hide();
    $('nav>svg').on('click', () => {
        $('.hide').toggle(1000);
    });
    $.ajax({
        url: "js/data.json",
        crossDomain: true,
        dataType: "jsonp"
    }).done((data) => {
        console.log(data);
        $datalisting(data);
    });
    const $datalisting = info => {
        //info = _.sortBy();
        $("#user-listing").loadTemplate('template.html', info, {
            complete: () => {

            }
        });
    }

});