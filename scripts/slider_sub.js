const slider = $(".TVS-grid , .MVS-grid");
slider.slick({
    slidesToShow: 7,
    }); 
slider.on('wheel', (function(e) {
      e.preventDefault();
    
      if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickNext');
      } else {
        $(this).slick('slickPrev');
      }
    }));

    