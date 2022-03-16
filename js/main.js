$(function(){

  $(window).scroll(function(){
    const curr = $(this).scrollTop();

    if(curr > 0){
      $("header").addClass("white")
    }else{
      $("header").removeClass("white")
    }
  })


    var swiper = new Swiper(".text_slider", {
        loop:true,
        autoplay:true,
    });
    var swiper = new Swiper(".main_slider", {
        loop:true,
        autoplay:true,
        pagination: {
          el: ".main_slider .swiper-pagination",
        },
      });
    var swiper = new Swiper(".listSwiper", {
        slidesPerView: 2.3,
        spaceBetween: 13,
        
      });


    // var swiper = new Swiper(".gnb_slider", {
    //     slidesPerView: 9,
    //     spaceBetween: 1,
        
    //   });
    var swiper = new Swiper(".gnb_slider", {
        slidesPerView: "auto",
        // 오토 쓰려면 스와이퍼 슬라이드 (알맹이...) 들에게도 위드 오토가 있어야함
        // loop:true,
        spaceBetween: 30,
        // centeredSlides: true,
        /* 센터슬라이드.. 가운데부터 시작하기~ */
        
      });



      
      $(".header_top .arrow").click(function(){
        h = $(".gnb_all .wrap").outerHeight();
        console.log("click");  

        if($(this).hasClass("on")){
          $(this).removeClass("on")
          $(".all_menu").removeClass('on')
          $(".gnb_all").stop().animate({height:0},300)
        }else{
          $(this).addClass('on')
          $(".all_menu").addClass('on')
          $(".gnb_all").stop().animate({height:h},300,function(){
            $(".gnb_all").css({'height':'auto'});
          })
        }
      })




      $(".category a").click(function(e){
        e.preventDefault();
        console.log("click");

        $(".side_menu").addClass('show')
        $("body").addClass("hidden")
      });

      $(".side_menu .close , .dimmed").click(function(e){
        e.preventDefault();
        console.log("click");

        $(".side_menu").removeClass('show')
        $('body').removeClass("hidden") /* dimmed를 클릭하면 닫기헤 하는데 dimmed도 빠져야하니까 바디의 히든을 지운다 */
      });


      $(".dept").click(function(e){
          e.preventDefault();

          h = $(this).siblings(".sub").children(".sub_cate").height();
          console.log(h)

          if($(this).siblings(".sub").height() > 0){
              $('.sub').stop().animate({height:0},300)
              $(this).parent('.arrow').removeClass('active')
          }else{
            $('.arrow').removeClass('active')
            $(this).parent('.arrow').addClass('active')
            $('.sub').stop().animate({height:0},300)
            $(this).siblings(".sub").stop().animate({height:h},300)
          }
      });
})