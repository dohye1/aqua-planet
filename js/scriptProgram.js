

$(document).ready(function () {
    // 탭메뉴 초기값
    $('#perform').show();
    $('#pure').hide();
    $('#do').hide();
    $('.program_btn').css({ 'color': '#666666', 'fontSize': '17px', 'fontWeight': '300' });
    $('.pure_btn').css({ 'color': '#adadad', 'fontSize': '16px', 'fontWeight': '100' });
    $('.do_btn').css({ 'color': '#adadad', 'fontSize': '16px', 'fontWeight': '100' });
    $('footer').css({'marginTop':'850px'});

    // 탭메뉴 공연프로그램 눌렀을때
    $('.program_btn').click(function () {
        $('#perform').show();
        $('#pure').hide();
        $('#do').hide();
        $('.program_btn').css({ 'color': '#666666', 'fontSize': '17px', 'fontWeight': '300' });
        $('.pure_btn').css({ 'color': '#adadad', 'fontSize': '16px', 'fontWeight': '100' });
        $('.do_btn').css({ 'color': '#adadad', 'fontSize': '16px', 'fontWeight': '100' });
        $('footer').css({ 'marginTop': '850px' });

    });

    // 탭메뉴 생태눌렀을때
    $('.pure_btn').click(function () {
        $('#perform').hide();
        $('#pure').show();
        $('#do').hide();
        $('.program_btn').css({ 'color': '#adadad', 'fontSize': '16px', 'fontWeight': '100' });
        $('.pure_btn').css({ 'color': '#666666', 'fontSize': '17px', 'fontWeight': '300' });
        $('.do_btn').css({ 'color': '#adadad', 'fontSize': '16px', 'fontWeight': '100' });
        $('footer').css({ 'marginTop': '1200px' });

    });

    // 탭메뉴 체험눌렀을때
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