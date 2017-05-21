// $(document).foundation()
// 

$(document).ready(function(){
  $('.your-class').slick({
    setting-name: setting-value
  });
});



$('.autoplay').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 800,
});


$(".slider").slick({

  // normal options...
  infinite: false,

  // the magic
  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
});