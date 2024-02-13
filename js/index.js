
$(".logo").click (function(){
    $(".logo").animate({
      height: "+=15px",
      width: "+=15px"
    }).animate({
        height: "-=15px",
        width: "-=15px"
      })
});