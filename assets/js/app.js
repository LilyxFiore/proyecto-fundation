$(document).on('ready', function() {
       $(".regular").slick({
         dots: true,
         infinite: true,
         slidesToShow: 5,
         slidesToScroll: 5
       });
       $(".center").slick({
         dots: true,
         infinite: true,
         centerMode: true,
         slidesToShow: 5,
         slidesToScroll: 5
       });
       $(".variable").slick({
         dots: true,
         infinite: true,
         variableWidth: true
       });
     });
