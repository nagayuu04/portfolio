$(function(){
    $(".item1").hover(
    function(){
        $(".header-nav-sec1").slideDown();
    },function(){
        $(".header-nav-sec1").slideUp();
    })

    $(".item5").hover(
        function(){
            $(".header-nav-sec2").slideDown();
        },function(){
            $(".header-nav-sec2").slideUp();
    })

    $(".item-sec1").hover(
        function(){
            $(".header-nav-thi1").slideDown();
        },function(){
            $(".header-nav-thi1").slideUp();
        })
    
    $(".item-sec5").hover(
        function(){
            $(".header-nav-thi2").slideDown();
        },function(){
            $(".header-nav-thi2").slideUp();
    })

    $(".search-box").click(function(){
        $('.search-window,.bg').hide().fadeIn();

        $('.bg,.fadeout').click(function(){
            $(".search-window,.bg").fadeOut(function(){　//フェードアウトの処理が完了後に背景とモーダル削除
              $(this).fadeOut();
            })
        })
    })

    $(".bar").click(function(){
        $('.menu-window,.bg').hide().fadeIn();

        $('.bg,.fadeout2').click(function(){
            $(".menu-window,.bg").fadeOut(function(){　//フェードアウトの処理が完了後に背景とモーダル削除
              $(this).fadeOut();
            })
        })
    })

    $('.slider').slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        slidesToShow:4,
        draggable:false,
        responsive:[
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow:3,
                }
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint: 480,
                settings:{
                    slidesToShow:1,
                }
            },
        ]
    });

    
})