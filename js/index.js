
$(".logo").hover (function(){
    $(".logo").animate({
      opacity: "0.5",
    }, "slow").animate({
      opacity: "1",
    }, "slow");
});