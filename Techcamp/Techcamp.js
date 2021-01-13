$(function(){
    $(".header-nav-item").hover(
        function(){
          $(this).children(".hover-box").fadeIn(200);
      },function(){
          $(this).children(".hover-box").fadeOut(200);
    })

    $(window).load(function(){
        $('.infiniteslide').infiniteslide({
            'height': 200, // 高さを指定
            'speed': 30, // スピードを指定
            'direction' : 'left', // スライドする向きを指定
            
        });
       });

})


