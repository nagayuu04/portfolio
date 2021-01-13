$(function(){
    $.fn.clickToggle = function (a, b) {
        return this.each(function () {
          var clicked = false;
          $(this).on('click', function () {
            clicked = !clicked;
            if (clicked) {
              return a.apply(this, arguments);
            }
            return b.apply(this, arguments);
          });
        });
    };

    $(".top-right-list").scroll(function() {
        if($(this).scrollLeft()==0){
            $(".white-gd").hide();
        }else{
            $(".white-gd").show();
        }
    });

    $(".hostingflow-list").scroll(function(){
        if($(this).scrollLeft()==0){
            $(".white-gd-content2").hide();
            $(".white-gd-content-right").show();
        }else if($(this).scrollLeft()>0){
            $(".white-gd-content-right").show();
            $(".white-gd-content2").show();
        }else if($(this).scrollLeft()==75){
            $(".white-gd-content-right").hide();
            $(".white-gd-content2").show();
        }


    });

    

    $('.form-pop').click(function() {
        if ($('.center-btn-popup').is(':visible')) {
            $('.center-btn-popup').fadeOut();
        } else {
            $('.center-btn-popup').fadeIn();
        }
        
    });

    $('.form-pop2').click(function() {
        if ($('.center-btn-popup2').is(':visible')) {
            $('.center-btn-popup2').fadeOut();
        } else {
            $('.center-btn-popup2').fadeIn();
        }
        
    });

    $(".popup-list-item").click(function(){
        var text=$(this).find(".list-title").text();

        $('.center-btn-popup').fadeOut();

        $(".check").hide();

        if(text=="まるまる貸し切り"){
            $(".check1").show();
        }else if(text=="個室"){
            $(".check2").show();
        }else{
            $(".check3").show();
        }

        $(".form-pop").attr("value",text)
    })

    $(".popup-list-item2").click(function(){
        var text2=$(this).find(".list-title2").text();

        $('.center-btn-popup2').fadeOut();

        $(".check").hide();

        if(text2=="マンション・アパート"){
            $(".check4").show();
        }else if(text2=="B&B"){
            $(".check5").show();
        }else if(text2=="デザイナーズホテル"){
            $(".check6").show();
        }else if(text2=="一軒家"){
            $(".check7").show();
        }else if(text2=="サブユニット"){
            $(".check8").show();
        }else{
            $(".check9").show();
        }

        $(".form-pop2").attr("value",text2)
    })

    $(".expected-extra-btn").clickToggle(function(){
        $(".form2").show();

        $(this).children("p").html('<i class="fas fa-plus"></i>特別なアメニティ・設備を追加')
    },function(){

        $(".form3").show();

        $(this).hide();

    });

    

    



    



    
})