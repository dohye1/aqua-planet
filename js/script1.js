
$(document).ready(function () {
    // �Ǹ޴� �ʱⰪ
    $('.demo .content-slider li img').filter(':nth-child(1)').show();
    $('.demo .content-slider li img').filter(':nth-child(2)').hide();
    $('.demo .content-slider li img').filter(':nth-child(3)').hide();

    $('.doll_btn').css({
        'color': '#656464', 'fontSize': '20px', 'fontWeight': '500',
        'border-bottom': '1px solid #656464', 'fontWeight': '600'
    });
    $('.bag_btn').css({ 'color': '#979797', 'fontSize': '18px' });
    $('.acc_btn').css({ 'color': '#979797', 'fontSize': '18px' });

    // �Ǹ޴� doll��������
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

    // �Ǹ޴� bag��������
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

    // �Ǹ޴� acc��������
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


    //insta �ʱⰪ
    $('#instaP .bkbox').hide();

    //insta������ ���콺������
    $('#instaP .instabox').mouseover(function () {
        $(this).find('.bkbox').show();
    });

    $('#instaP .instabox').mouseout(function () {
        $(this).find('.bkbox').hide();
    });
});

