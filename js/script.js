$(() => {
    // READ DATA
    /*$.getJSON("json/data.json").done((data) => {

    });*/
    $('.hide').hide();
    $('nav>svg').on('click', () => {
        $('.hide').toggle(1000);
    });
});