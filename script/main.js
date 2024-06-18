$(function(){

    $("nav ul li").mouseover(function(){
        $(".sub, .bg").stop().slideDown(500);
    });
    $("nav ul li").mouseout(function(){
        $(".sub, .bg").stop().slideUp(500);
    });

    $(document).ready(function(){
  
        $('ul.tabs li').click(function(){
          var tab_id = $(this).attr('data-tab');
      
          $('ul.tabs li').removeClass('current');
          $('.tab-content').removeClass('current');
      
          $(this).addClass('current');
          $("#"+tab_id).addClass('current');
        })
      
      })

      let i = 0;
      $(".slider ul").append($(".slider ul li").first().clone(true));
      setInterval(function(){
        i++;
        $(".slider ul").animate({marginLeft: -100 * i +"%"}, 1200);
        if (i==3) {

            setTimeout(function(){
                $(".slider ul").animate({marginLeft:0},0);

                i=0;

            },700)
        }

      },3000);

});