$(function () {
    $('#my').carousel({
        interval: 4000
    });
    $('#h').click(function () {
        $('#my').carousel('prev');
    });
    $('#hi').click(function () {
        $('#my').carousel('next');
    });
    $('#sidebarcollapse').on('click', function () {
        $('#sidebar').toggleClass('activee');
    });

    $('#sidebarcol').on('click', function () {
        $('#sidebar').toggleClass('actv');
    });
    $('#sidebarcol').on('click', function () {
        $('#topbar').toggleClass('activv');
    });

});