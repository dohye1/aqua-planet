

$(document).ready(function () {
    // �Ǹ޴� �ʱⰪ
    $('#perform').show();
    $('#pure').hide();
    $('#do').hide();
    $('.program_btn').css({ 'color': '#666666', 'fontSize': '17px', 'fontWeight': '300' });
    $('.pure_btn').css({ 'color': '#adadad', 'fontSize': '16px', 'fontWeight': '100' });
    $('.do_btn').css({ 'color': '#adadad', 'fontSize': '16px', 'fontWeight': '100' });
    $('footer').css({'marginTop':'850px'});

    // �Ǹ޴� �������α׷� ��������
    $('.program_btn').click(function () {
        $('#perform').show();
        $('#pure').hide();
        $('#do').hide();
        $('.program_btn').css({ 'color': '#666666', 'fontSize': '17px', 'fontWeight': '300' });
        $('.pure_btn').css({ 'color': '#adadad', 'fontSize': '16px', 'fontWeight': '100' });
        $('.do_btn').css({ 'color': '#adadad', 'fontSize': '16px', 'fontWeight': '100' });
        $('footer').css({ 'marginTop': '850px' });

    });

    // �Ǹ޴� ���´�������
    $('.pure_btn').click(function () {
        $('#perform').hide();
        $('#pure').show();
        $('#do').hide();
        $('.program_btn').css({ 'color': '#adadad', 'fontSize': '16px', 'fontWeight': '100' });
        $('.pure_btn').css({ 'color': '#666666', 'fontSize': '17px', 'fontWeight': '300' });
        $('.do_btn').css({ 'color': '#adadad', 'fontSize': '16px', 'fontWeight': '100' });
        $('footer').css({ 'marginTop': '1200px' });

    });

    // �Ǹ޴� ü�购������
    $('.do_btn').click(function () {
        $('#perform').hide();
        $('#pure').hide();
        $('#do').show();
        $('.program_btn').css({ 'color': '#adadad', 'fontSize': '16px', 'fontWeight': '100' });
        $('.pure_btn').css({ 'color': '#adadad', 'fontSize': '16px', 'fontWeight': '100' });
        $('.do_btn').css({ 'color': '#666666', 'fontSize': '17px', 'fontWeight': '300' });
        $('footer').css({ 'marginTop': '1200px' });

    });

});