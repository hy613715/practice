// *******************************
// *******************************
// *******************************
// *******************************
$(function(){
    var pointer = $('#lotteryBtn');//获取到指针；
    var awards = [
        '中国联通',
        'iPhone',
        '唯品会',
        'iPad mini',
        '谢谢参与',
        '50元充值卡',
        '50呼豆',
        '京东购物卡'
    ];
    var circle = 360; //一圈360度
    var singleAward = circle/8;// 单个奖品所占度数

    var random = getRandom(circle - 26) ;//取0-360随机数//默认时已经转了26度，所以这里减26
    function getRandom(n){
        return Math.floor(Math.random()*n+1)
    }

    var totalAngle = 3*circle + random; //指针转动的总角度
    alert(random);

    var resultStop = Math.ceil(Math.abs(random/singleAward));
    alert(resultStop)

    pointer.rotate({bind:{
        click: function(){
            $(this).rotate({
                angle: 0,
                animateTo:totalAngle,
                duration: 6000,
                callback: function(){
                    alert(awards[resultStop])
                }
            })
        }
      }
    });
})
/*
    1、获取到指针；
    2、查看转盘奖品分布情况
        2.1 设置默认情况指针的转动角度为0；
        2.2 此例奖品分为8份，每份所占角度 = 360/8
        *****************************************************************************************
        ***********************************下面这点占时不用**************************************
        *****************************************************************************************
        2.3 定义数组awards，放置奖品信息，确定每个奖品范围
            1号奖品 0*(360/8) ~ (360/8)*1
            2号奖品 1*(360/8) ~ (360/8)*2
            3号奖品 2*(360/8) ~ (360/8)*3
            ...
            ...
            8号奖品 7*(360/8) ~ (360/8)*8
        利用数组的index值来计算当前奖品的范围
            for(var i=0;i<awards.length;i++ ){
                arr[i].areaMin = i*(360/8);
                arr[i].areaMax = (i+1)(360/8);
            }
        *****************************************************************************************
        ***********************************上面这点占时不用**************************************
        *****************************************************************************************
        2.4 指针转动的总角度 设置至少转动3周  总角度=360*3+ （1-360的随机数向上或向下取整）
        2.5 指针停留时的角度 = 360%（总角度 - 360*3）
        2.6 指针停留时的角度/每份所占角度 (向上取整)就得到中奖的信息
*/