
$(".logo").hover (function(){
    $(".logo").animate({
      height: "-=15px",
      width: "-=15px"
    }).animate({
        height: "+=15px",
        width: "+=15px"
      });
});

$("a").hover (function(){
  $(".logo").fadeTo(500, 0.4);
});