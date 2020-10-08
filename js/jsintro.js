$(document).ready(function () {
    //서브에 들어왔을때 초기화면
    $('.mission_btn').css({'font-size':'18px','font-weight' : '400'});
    $('#i1').show();
    $('#i2').hide();
    $('.bg').hide();
    $('.right .txt').css({ 'opacity': '0' });
    $('.left .txt').css({ 'opacity': '0' });

    //value에 마우스오버시 txt뜨게
    $('.left').mouseover(function () {
        $('.right .txt').stop(true).animate({ 'opacity': '1' }, 500, 'linear');
        $('.right .title').stop(true).animate({ 'opacity': '0' }, 500, 'linear');

    });

    $('.left').mouseout(function () {
        $('.right .txt').stop(true).animate({ 'opacity': '0' }, 500, 'linear');
        $('.right .title').stop(true).animate({ 'opacity': '1' }, 500, 'linear');

    });

    //mission에 마우스오버시 txt뜨게
    $('.right').mouseover(function () {
        $('.left .txt').stop(true).animate({ 'opacity': '1' }, 500, 'linear');
        $('.left .title').stop(true).animate({ 'opacity': '0' }, 500, 'linear');

    });

    $('.right').mouseout(function () {
        $('.left .txt').stop(true).animate({ 'opacity': '0' }, 500, 'linear');
        $('.left .title').stop(true).animate({ 'opacity': '1' }, 500, 'linear');

    });

    //가치 눌렀을때
    $('.mission_btn').click(function(){
    $('.mission_btn').css({ 'font-size': '18px', 'font-weight': '400' });
    $('.space_btn').css({ 'font-size': '16px', 'font-weight': '300' });

    $('#i1').show();
    $('#i2').hide();
    $('.bg').hide();
    $('.left .txt').hide();
    $('.right .txt').hide();
    });

    //전시관 눌렀을때
    $('.space_btn').click(function () { 
    $('.mission_btn').css({ 'font-size': '16px', 'font-weight': '300' });
    $('.space_btn').css({ 'font-size': '18px', 'font-weight': '400' });
    $('#i1').hide();
    $('#i2').show();
    $('.bg').show();
    });

    //f2를 초기값으로
    $('#map1').show();
    $('#map2').hide();
    $('#i2 .floor .2f').stop(true).animate({
        'fontSize': '25px',
        'fontWeight': '500'
    });


    //2f누르면 map1이 나오게하기
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

    //3f누르면 map2이 나오게하기

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

    // 분홍에 마우스오버시 글자변화
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

    // 연두에 마우스오버시 글자변화
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


    // 노랭에 마우스오버시 글자변화
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

    // 파랑에 마우스오버시 글자변화
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

    // 노랭에 마우스오버시 글자변화
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


    // 연두에 마우스오버시 글자변화
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
