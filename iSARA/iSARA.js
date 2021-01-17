$(function(){
    $(".question-item").click(function(){
        var $answer = $(this).find('.question-item-a');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');

      $answer.slideUp(100);

      $(this).find(".fa-angle-down").show();
      $(this).find(".fa-angle-up").hide();

      
    } else {
      $answer.addClass('open'); 

      $answer.slideDown(100);
      
      $(this).find(".fa-angle-up").show();
      $(this).find(".fa-angle-down").hide();
      
    }
    });

    $(".question-item2").click(function(){
        var $answer = $(this).find('.question-item-a2');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');

      $answer.slideUp(100);

      $(this).find(".fa-angle-down").show();
      $(this).find(".fa-angle-up").hide();

      
    } else {
      $answer.addClass('open'); 

      $answer.slideDown(100);
      
      $(this).find(".fa-angle-up").show();
      $(this).find(".fa-angle-down").hide();
      
    }
    });

    var pagetop = $('.page-top');
  // ボタン非表示
  pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
    
})
