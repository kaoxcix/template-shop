$(document).ready(function () {
    $('body').on('click','.search-overlay-btn', function () {
        $('.search-overlay').show();
    });

    $('body').on('click','.search-close', function () {
        $('.search-overlay').hide();
    });

});