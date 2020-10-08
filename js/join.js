$(document).ready(function () {
    //초기값설정
    $('#step1').show();
    $('#step2').hide();
    $('#step3').hide();
    $('#step .step li').filter(':nth-child(1)').css({ 'background-color':'#83abd1'});


    $('.next').click(function () {
        $('#step1').hide();
        $('#step2').show();
        $('#step .step li').filter(':nth-child(1)').css({ 'background-color': '#b5b5b5' });
        $('#step .step li').filter(':nth-child(2)').css({ 'background-color': '#83abd1' });
    });

    $('.next1').click(function () {
        $('#step1').show();
        $('#step2').hide();
        $('#step .step li').filter(':nth-child(2)').css({ 'background-color': '#b5b5b5' });
        $('#step .step li').filter(':nth-child(1)').css({ 'background-color': '#83abd1' });
    });
});
