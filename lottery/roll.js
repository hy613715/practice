// *************************************
// *************************************
// *************************************
$(function(){
    var rollUl = $('#rollAwardName'),
        rollLis = $('#rollAwardName li'),//打印出3个li
        topDefault = 0, //top的初始值
        speed = 30, //滚动的速度
        card = $('.lottery-card'),
        time;

    rollLis.clone(true).appendTo(rollUl); //复制所有的li
    timer = setInterval(
        function(){
            rollUl[0].style.top = (topDefault--) + 'px'; // top值递减1

            if(topDefault == -rollUl.height()/2){
                topDefault = 0; //当top值为ul高度的一半的时候，top值设为0；保证无缝滚动
            }
        },speed
    )
    card.mouseover(function(){
        clearInterval(timer); //清除定时器
    });
});