$(function(){
    $(function() {
        let tabs = $(".tab"); // tabのクラスを全て取得し、変数tabsに配列で定義
        $(".tab").on("click", function() { // tabをクリックしたらイベント発火
          $(".active").removeClass("active"); // activeクラスを消す
          $(this).addClass("active"); // クリックした箇所にactiveクラスを追加
          const index = tabs.index(this); // クリックした箇所がタブの何番目か判定し、定数indexとして定義
          $(".content").removeClass("show").eq(index).addClass("show"); // showクラスを消して、contentクラスのindex番目にshowクラスを追加
        })
    })

    var mySwiper = new Swiper('.swiper-container', {
        loop:true,
        slidesPerView: 2,
  　　　　centeredSlides : true,
        spaceBetween: 30,

        pagination: { 
            el: '.swiper-pagination', //ページネーションの要素
            type: 'bullets', //ページネーションの種類
            clickable: true, //クリックに反応させる
        },

        simulateTouch:false,

        autoplay:{
            delay:2000,
        },

        speed:3000,

        breakpoints:{
            640:{
                slidesPerView: 3,
                spaceBetween: 40,
                centeredSlides : false
            },

            980:{
                slidesPerView: 4,
                spaceBetween: 60,
                centeredSlides : false,
            }
        }
    });

    $(".swiper-slide").hover
    (function(){
        $(this).addClass("slide-hover");
    },(function(){
        $(this).removeClass("slide-hover");
    }))

    $(".work-content__more--btn").hover
    (function(){
        $(this).addClass("btn-hover");
    },(function(){
        $(this).removeClass("btn-hover");
    }))

    $(".slide-content__btn").hover
    (function(){
        $(this).addClass("btn-hover");
    },(function(){
        $(this).removeClass("btn-hover");
    }))

    $(function(){
        // #で始まるリンクをクリックしたら実行されます
        $('a[href^="#"]').click(function() {
          // スクロールの速度
          var speed = 1500; // ミリ秒で記述
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
        });
    });

    $(".header-bar").click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass("active");
            $(".modal-wrapper").removeClass("active");
            $(".black-bg").removeClass("active");
        }else{
            $(this).addClass("active");
            $(".modal-wrapper").addClass("active");
            $(".black-bg").addClass("active");
        }
    })

    $(".side-btn").click(function(){
        $(".header-bar").removeClass("active");
        $(".modal-wrapper").removeClass("active");
        $(".black-bg").removeClass("active");
    })

    $(".side-bar").click(function(){
        $(".header-bar").removeClass("active");
        $(".modal-wrapper").removeClass("active");
        $(".black-bg").removeClass("active");
    })
})