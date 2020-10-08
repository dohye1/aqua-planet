
$(document).ready(function () {
    // 탭메뉴 초기값
    $('.demo .content-slider li img').filter(':nth-child(1)').show();
    $('.demo .content-slider li img').filter(':nth-child(2)').hide();
    $('.demo .content-slider li img').filter(':nth-child(3)').hide();

    $('.doll_btn').css({
        'color': '#656464', 'fontSize': '20px', 'fontWeight': '500',
        'border-bottom': '1px solid #656464', 'fontWeight': '600'
    });
    $('.bag_btn').css({ 'color': '#979797', 'fontSize': '18px' });
    $('.acc_btn').css({ 'color': '#979797', 'fontSize': '18px' });

    // 탭메뉴 doll눌렀을때
    $('.doll_btn').click(function () {
        $('.demo .content-slider li img').filter(':nth-child(1)').show();
        $('.demo .content-slider li img').filter(':nth-child(2)').hide();
        $('.demo .content-slider li img').filter(':nth-child(3)').hide();
        $('.doll_btn').css({
            'color': '#656464', 'fontSize': '20px', 'fontWeight': '500',
            'border-bottom': '1px solid #656464', 'fontWeight': '600'
        });
        $('.bag_btn').css({
            'color': '#979797', 'fontSize': '18px', 'fontWeight': '200',
            'border-bottom': 'none'
        });
        $('.acc_btn').css({
            'color': '#979797', 'fontSize': '18px', 'fontWeight': '200',
            'border-bottom': 'none'
        });
    });

    // 탭메뉴 bag눌렀을때
    $('.bag_btn').click(function () {
        $('.demo .content-slider li img').filter(':nth-child(1)').hide();
        $('.demo .content-slider li img').filter(':nth-child(2)').show();
        $('.demo .content-slider li img').filter(':nth-child(3)').hide();
        $('.doll_btn').css({
            'color': '#979797', 'fontSize': '18px', 'fontWeight': '200',
            'border-bottom': 'none'
        });
        $('.bag_btn').css({
            'color': '#656464', 'fontSize': '20px', 'fontWeight': '500',
            'border-bottom': '1px solid #656464', 'fontWeight': '600'
        });
        $('.acc_btn').css({
            'color': '#979797', 'fontSize': '18px', 'fontWeight': '200',
            'border-bottom': 'none'
        });
    });

    // 탭메뉴 acc눌렀을때
    $('.acc_btn').click(function () {
        $('.demo .content-slider li img').filter(':nth-child(1)').hide();
        $('.demo .content-slider li img').filter(':nth-child(2)').hide();
        $('.demo .content-slider li img').filter(':nth-child(3)').show();

        $('.bag_btn').css({
            'color': '#979797', 'fontSize': '18px', 'fontWeight': '200',
            'border-bottom': 'none'
        });
        $('.doll_btn').css({
            'color': '#979797', 'fontSize': '18px', 'fontWeight': '200',
            'border-bottom': 'none'
        });
        $('.acc_btn').css({
            'color': '#656464', 'fontSize': '20px', 'fontWeight': '500',
            'border-bottom': '1px solid #656464', 'fontWeight': '600'
        });
    });


    //insta 초기값
    $('#instaP .bkbox').hide();

    //insta사진에 마우스오버시
    $('#instaP .instabox').mouseover(function () {
        $(this).find('.bkbox').show();
    });

    $('#instaP .instabox').mouseout(function () {
        $(this).find('.bkbox').hide();
    });
});

