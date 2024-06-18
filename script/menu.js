  
  let tabLink = $('.tab-menu > li'),
      subLink = $('.foodsub > li'),
      tabContent =$('.menu-box'),
      tab_id = $(this).attr('data-tab'),
      currentUrl =location.href;

  tabLink.click(function(e){
    e.preventDefault();
    activateTab($(this).index());
  });

  subLink.click(function(e){
    e.preventDefault();
    activateTab($(this).index());
  });


    subLink.each(function(){
      let targetStr =$(this).find('a').attr('href');

      if(currentUrl.indexOf(targetStr) > -1){
        let targetIdx = $(this).index();

        activateTab(targetIdx);

        if(currentUrl.indexOf('#') == -1 && currentUrl.indexOf('menu.html')){
          activateTab(0);

        }

      }

    });


    function activateTab(idx){
      tabLink.removeClass('active');
      tabLink.eq(idx).addClass('active');
      $('#' + tab_id).addClass('active');

      tabContent.hide();
      tabContent.eq(idx).show();
    };

