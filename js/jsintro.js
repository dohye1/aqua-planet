$(document).ready(function () {
    //���꿡 �������� �ʱ�ȭ��
    $('.mission_btn').css({'font-size':'18px','font-weight' : '400'});
    $('#i1').show();
    $('#i2').hide();
    $('.bg').hide();
    $('.right .txt').css({ 'opacity': '0' });
    $('.left .txt').css({ 'opacity': '0' });

    //value�� ���콺������ txt�߰�
    $('.left').mouseover(function () {
        $('.right .txt').stop(true).animate({ 'opacity': '1' }, 500, 'linear');
        $('.right .title').stop(true).animate({ 'opacity': '0' }, 500, 'linear');

    });

    $('.left').mouseout(function () {
        $('.right .txt').stop(true).animate({ 'opacity': '0' }, 500, 'linear');
        $('.right .title').stop(true).animate({ 'opacity': '1' }, 500, 'linear');

    });

    //mission�� ���콺������ txt�߰�
    $('.right').mouseover(function () {
        $('.left .txt').stop(true).animate({ 'opacity': '1' }, 500, 'linear');
        $('.left .title').stop(true).animate({ 'opacity': '0' }, 500, 'linear');

    });

    $('.right').mouseout(function () {
        $('.left .txt').stop(true).animate({ 'opacity': '0' }, 500, 'linear');
        $('.left .title').stop(true).animate({ 'opacity': '1' }, 500, 'linear');

    });

    //��ġ ��������
    $('.mission_btn').click(function(){
    $('.mission_btn').css({ 'font-size': '18px', 'font-weight': '400' });
    $('.space_btn').css({ 'font-size': '16px', 'font-weight': '300' });

    $('#i1').show();
    $('#i2').hide();
    $('.bg').hide();
    $('.left .txt').hide();
    $('.right .txt').hide();
    });

    //���ð� ��������
    $('.space_btn').click(function () { 
    $('.mission_btn').css({ 'font-size': '16px', 'font-weight': '300' });
    $('.space_btn').css({ 'font-size': '18px', 'font-weight': '400' });
    $('#i1').hide();
    $('#i2').show();
    $('.bg').show();
    });

    //f2�� �ʱⰪ����
    $('#map1').show();
    $('#map2').hide();
    $('#i2 .floor .2f').stop(true).animate({
        'fontSize': '25px',
        'fontWeight': '500'
    });


    //2f������ map1�� �������ϱ�
    $('#i2 .floor .2f').click(function () {
        $('#map1').show();
        $('#map2').hide();
        $('#i2 .floor .2f').stop(true).animate({
            'fontSize': '25px',
            'fontWeight': '500'
        });
        $('#i2 .floor .3f').stop(true).animate({
            'fontSize': '18px',
            'fontWeight': '200'
        });
    });

    //3f������ map2�� �������ϱ�

    $('#i2 .floor .3f').click(function () {
        $('#map1').hide();
        $('#map2').show();
        $('#i2 .floor .2f').stop(true).animate({
            'fontSize': '18px',
            'fontWeight': '200'
        });
        $('#i2 .floor .3f').stop(true).animate({
            'fontSize': '25px',
            'fontWeight': '500'
        });
    });

    //map1 js

    // ��ȫ�� ���콺������ ���ں�ȭ
    $('#map1 .f1').mouseover(function () {
        $('#map1 .txt1').stop(true).animate({
            'backgroundColor': '#c18e5d',
            'color': '#fff'
        }, 300, 'linear'),
        $('#map1 .txt .txt1 h2').stop(true).animate({
            'fontSize': '22px',
            'color': '#fff'
        }, 300, 'linear');
    });

    $('#map1 .f1').mouseout(function () {
        $('#map1 .txt1').stop(true).animate({
            'backgroundColor': 'rgba(0, 0, 0, 0.00)',
            'color': '#000'
        }, 300, 'linear'),
        $('#map1 .txt .txt1 h2').stop(true).animate({
            'fontSize': '20px',
            'color': '#c18e5d'
        }, 300, 'linear');
    });

    // ���ο� ���콺������ ���ں�ȭ
    $('#map1 .f2').mouseover(function () {
        $('#map1 .txt2').stop(true).animate({
            'backgroundColor': '#9abd8f',
            'color': '#fff'
        }, 300, 'linear'),
        $('#map1 .txt .txt2 h2').stop(true).animate({
            'fontSize': '22px',
            'color': '#fff'
        }, 300, 'linear');
    });

    $('#map1 .f2').mouseout(function () {
        $('#map1 .txt2').stop(true).animate({
            'backgroundColor': 'rgba(0, 0, 0, 0.00)',
            'color': '#000'
        }, 300, 'linear'),
        $('#map1 .txt .txt2 h2').stop(true).animate({
            'fontSize': '20px',
            'color': '#9abd8f'
        }, 300, 'linear');
    });


    // �뷩�� ���콺������ ���ں�ȭ
    $('#map1 .f3').mouseover(function () {
        $('#map1 .txt3').stop(true).animate({
            'backgroundColor': '#dce66b',
            'color': '#fff'
        }, 300, 'linear'),
        $('#map1 .txt .txt3 h2').stop(true).animate({
            'fontSize': '22px',
            'color': '#fff'
        }, 300, 'linear');
    });

    $('#map1 .f3').mouseout(function () {
        $('#map1 .txt3').stop(true).animate({
            'backgroundColor': 'rgba(0, 0, 0, 0.00)',
            'color': '#000'
        }, 300, 'linear'),
        $('#map1 .txt .txt3 h2').stop(true).animate({
            'fontSize': '20px',
            'color': '#dce66b'
        }, 300, 'linear');
    });

    //map2 js

    // �Ķ��� ���콺������ ���ں�ȭ
    $('#map2 .f1').mouseover(function () {
        $('#map2 .txt1').stop(true).animate({
            'backgroundColor': '#98b1bf',
            'color': '#fff'
        }, 300, 'linear'),
        $('#map2 .txt .txt1 h2').stop(true).animate({
            'fontSize': '22px',
            'color': '#fff'
        }, 300, 'linear');
    });

    $('#map2 .f1').mouseout(function () {
        $('#map2 .txt1').stop(true).animate({
            'backgroundColor': 'rgba(0, 0, 0, 0.00)',
            'color': '#000'
        }, 300, 'linear'),
        $('#map2 .txt .txt1 h2').stop(true).animate({
            'fontSize': '20px',
            'color': '#98b1bf'
        }, 300, 'linear');
    });

    // �뷩�� ���콺������ ���ں�ȭ
    $('#map2 .f2').mouseover(function () {
        $('#map2 .txt2').stop(true).animate({
            'backgroundColor': '#f1d882',
            'color': '#fff'
        }, 300, 'linear'),
        $('#map2 .txt .txt2 h2').stop(true).animate({
            'fontSize': '22px',
            'color': '#fff'
        }, 300, 'linear');
    });

    $('#map2 .f2').mouseout(function () {
        $('#map2 .txt2').stop(true).animate({
            'backgroundColor': 'rgba(0, 0, 0, 0.00)',
            'color': '#000'
        }, 300, 'linear'),
        $('#map2 .txt .txt2 h2').stop(true).animate({
            'fontSize': '20px',
            'color': '#f1d882'
        }, 300, 'linear');
    });


    // ���ο� ���콺������ ���ں�ȭ
    $('#map2 .f3').mouseover(function () {
        $('#map2 .txt3').stop(true).animate({
            'backgroundColor': '#a5c6b8',
            'color': '#fff'
        }, 300, 'linear'),
        $('#map2 .txt .txt3 h2').stop(true).animate({
            'fontSize': '22px',
            'color': '#fff'
        }, 300, 'linear');
    });

    $('#map2 .f3').mouseout(function () {
        $('#map2 .txt3').stop(true).animate({
            'backgroundColor': 'rgba(0, 0, 0, 0.00)',
            'color': '#000'
        }, 300, 'linear'),
        $('#map2 .txt .txt3 h2').stop(true).animate({
            'fontSize': '20px',
            'color': '#a5c6b8'
        }, 300, 'linear');
    });
});
