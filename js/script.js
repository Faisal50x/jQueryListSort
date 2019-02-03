$(() => {
    let aptData, sortBy, sortDir;
    sortBy = 'date';
    sortDir = 'desc';
    $('.hide').hide();
    $('nav>svg').on('click', () => {
        $('.hide').toggle(1000);
    });
    $.ajax({
        url: "js/data.json"
    }).done((data) => {
        aptData = data;
        $datalisting(aptData);
    });
    const $datalisting = data => {
        if (sortDir == 'asc') {
            data = _.sortBy(data, sortBy);
        } else {
            data = _.sortBy(data, sortBy).reverse();
        }

        $("#user-listing").loadTemplate('template.html', data, {
            complete: () => {

            }
        });
    }

    $('.sort-menu .dropdown-item').on('click', function () {
        let sortDropdown = $(this).attr('id');
        switch (sortDropdown) {
            case 'sort-name':
                $('.sort-by').removeClass('active');
                sortBy = 'name';
                break;
            case 'sort-email':
                $('.sort-by').removeClass('active');
                sortBy = 'email';
                break;
            case 'sort-date':
                $('.sort-by').removeClass('active');
                sortBy = 'date';
                break;
            case 'sort-asc':
                $('.sort-dir').removeClass('active');
                sortDir = 'asc';
                break;
            case 'sort-desc':
                $('.sort-dir').removeClass('active');
                sortDir = 'desc';
                break;
        }

        $(this).addClass('active');
        $datalisting(aptData);
    });

});