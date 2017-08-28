window.onload = function(){
    // 为避免命名冲突，新建一个clock对象
    var clock = {
        // 设置时钟样式
        setClock: function(){
            var clockNum = document.getElementById('clock-num');
            for(var i = 12 ; i > 0 ; i --){
                //创建12个数字的div
                var order = document.createElement('div');
                order.innerText = i;
                order.setAttribute('class','num');
                clockNum.appendChild(order);
            }
            // 设置时钟数字的位置，这里面的数学公式有点绕
            var nums = document.querySelectorAll('div.num');
            var radius = 130; //半径
            var dot_num = 360 / nums.length; //每个数字所占的角度
            var ahd = dot_num * Math.PI / 180;//每个数字所占的狐度

            for(var i = 0 ; i < nums.length ; i ++){
                // 这里换行写只是为了好看一点，其实应该写成一行代码
                nums[i].style.cssText =
                    'left:'+ (140 + Math.sin((ahd*i))*radius)+'px;' +
                    'top:'+ (140 + Math.cos((ahd*i))*radius) + 'px';
            }
            // 设置刻度
            for(var i = 0 ; i < 60 ; i ++){
                var scaleBox = document.getElementById('scale-box');
                //创建刻度容器
                var scale = document.createElement('div');
                scale.setAttribute('class','scale');
                //创建需要显示的刻度
                var scaleShow = document.createElement('div');
                scaleShow.setAttribute('class','scale-show');
                // 将创建的刻度插入相应的位置
                scale.appendChild(scaleShow);
                scaleBox.appendChild(scale);
            }
            // 获取创建的刻度
            var scales = document.getElementsByClassName('scale');
            for(var i = 0 ; i < scales.length ; i ++){
                //设置刻度的位置
                scales[i].style.webkitTransform = 'rotate(' + i * 6 + 'deg)';
                scales[i].style.msTransform = 'rotate(' + i * 6 + 'deg)';
            }
        },
        // 指针位置
        pointerStart: function(){
            // 新建时间对象
            var date = new Date();
            // 获取指针
            var pointerSecond = document.getElementById('pointer-second');
            var pointerMinute = document.getElementById('pointer-minute');
            var pointerHour = document.getElementById('pointer-hour');
            // 设置指针位置
            pointerMinute.style.webkitTransform = 'rotate(' + date.getMinutes()*6 + 'deg)';
            pointerMinute.style.msTransform = 'rotate(' + date.getMinutes()*6 + 'deg)';
            pointerSecond.style.webkitTransform = 'rotate(' + date.getSeconds()*6 + 'deg)';
            pointerSecond.style.msTransform = 'rotate(' + date.getSeconds()*6 + 'deg)';
            // 获取小时指针所占的角度，这里的30是每个小时所占的角度：360/12
            var hourAngle = 30*(date.getMinutes()/60+date.getHours());
            if(hourAngle > 360){
                pointerHour.style.webkitTransform = 'rotate(' + (hourAngle - 360) + 'deg)';
                pointerHour.style.msTransform = 'rotate(' + (hourAngle - 360) + 'deg)';
            }else{
                pointerHour.style.webkitTransform = 'rotate(' + hourAngle + 'deg)';
                pointerHour.style.msTransform = 'rotate(' + hourAngle + 'deg)';
            }
        }
    }
    // 调用函数
    clock.setClock();
    clock.pointerStart();//单独调用一次函数，页面加载的时候就获取指针位置，这样刷新的时候指针不会初始化
    setInterval(clock.pointerStart,1000);
}