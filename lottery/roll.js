// *************************************
// *************************************
// *************************************
$(function(){
    var rollUl = $('#rollAwardName'),
        rollLis = $('#rollAwardName li'),//打印出3个li
        topDefault = 0, //top的初始值
        speed = 40, //滚动的速度
        card = $('.lottery-card'),
        timer = null;

    rollLis.clone(true).appendTo(rollUl); //复制所有的li

    function hover(onOff) {
        clearInterval(timer); //启动定时器之前，清除以前的定时器，否则会越来越快
        timer = setInterval(function(){
            rollUl[0].style.top = (topDefault--) + 'px'; // top值递减1
            if(topDefault == -rollUl.height()/2){
                topDefault = 0; //当top值为ul高度的一半的时候，top值设为0；保证无缝滚动
            }
        },speed);
        if(!onOff){
            clearInterval(timer);
        }
    }
    //true 表示开启定时器，flase表示清除定时器
    hover(true); //默认开启定时器
    card.mouseover(function(){
        hover(false);
    });
    card.mouseout(function(){
        hover(true);
    });
});