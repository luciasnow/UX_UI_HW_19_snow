
$(".logo").click (function(){
    $(".logo").animate({
      height: "+=15px",
      width: "+=15px"
    }, 500).animate({
        height: "-=15px",
        width: "-=15px"
      }, 500)
});