$(document).ready(function () {
    $('.demo .content-slider li').mouseover(function () {
        $(this).css({
            'backgroundColor': 'rgba(226,226,226,0.50)'
        });
           
    });

    $('.demo .content-slider li').mouseout(function () {
        $(this).css({
            'backgroundColor': '#f1faff'
        });
    });

    

});