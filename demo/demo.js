
window.onload=function() {
    weituo();// 事件委托
    checkInput();//正则表达式验证手机号码，邮箱，URL，座机号码(不完善);
    noRepeat();//数组去重
    sendObj();//将URL参数解析成一个对象
    totleCase();//统计每个字符串出现的次数，并打印出来
    preventDefault();//阻止默认行为
    stopPropation();//阻止冒泡
    onlyNumber();//提取字符串中的数字方法
};

// 事件委托
function weituo() {
    var box = document.getElementById('box');
    box.onclick = function(e) {
        var e = e||window.event,  //兼容IE
            target = e.target || e.srcElement; //指定一个目标
        if(target.nodeName.toLowerCase() == 'li') {
            target.style.backgroundColor = 'red';
        };
    };
};

//正则表达式验证手机号码，邮箱，URL，座机号码(不完善);
function checkInput() {
    var text = document.getElementById('text'),
        btn = document.getElementById('btn'),
        box = document.getElementById('RegExpBox'),
        tel = /^1\d{10}$/,
        mail = /^[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
        url = /^((http\:\/\/)?w{3}\.)?[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
        phone3 = /^0\d{2}(-)?\d{8}$/,
        phone4 = /^0\d{3}(-)?\d{7}$/;
    btn.onclick = function() {
        if(tel.test(text.value)) {
            box.style.color = '';//输入正确，显示字体默认颜色
            box.innerHTML = '您输入的手机号码是：' + text.value; //输入正确提示文字
        }else if(mail.test(text.value)) {
            box.style.color = '';//输入正确，显示字体默认颜色
            box.innerHTML = '您输入的邮箱是：' + text.value; //输入正确提示文字
        }else if(url.test(text.value)) {
            box.style.color = '';//输入正确，显示字体默认颜色
            box.innerHTML = '您输入的网址是：' + text.value; //输入正确提示文字
        }else if(phone3.test(text.value)||phone4.test(text.value)) {
            box.style.color = '';//输入正确，显示字体默认颜色
            box.innerHTML = '您输入的座机号码是：' + text.value; //输入正确提示文字
        }else {
            box.style.color = 'red';//输入出错，显示红色字体
            box.innerHTML = '你输入的不是手机号码、邮箱、URL、座机号码'; //输入错误提示文字
        };
    };
};
//数组去重
function noRepeat() {
    var box = document.getElementById('addP'),
        oldArr = document.getElementById('oldArr'),
        btn = document.getElementById('noRepeatBtn'),
        arr = oldArr.innerHTML.split(','), //获取标签内容，转化成数组
        newArr = [],
        i,
        newP = document.createElement('p');
    btn.onclick = function() {
        if(Array.isArray(arr)){ //判断arr是不是数组，是数组就执行下面操作，不是不执行
            for(i=0;i<arr.length;i++) {
                if(newArr.indexOf(arr[i]) == -1) {
                    newArr.push(arr[i]);
                };
            };
            newP.innerHTML = newArr; //把得到的新数组放到新建的P标签里面
            box.appendChild(newP);//添加P标签在页面里面
        };
    };
};
//将URL参数解析成一个对象
function sendObj() {
    var box = document.getElementById('urlBox'),
        btn = document.getElementById('urlBtn'),
        newDiv = document.createElement('div'),
        str = box.innerText,
        // newStr = str.split('?')[1], //截取域名后面的参数字符串，并将其转换成数组
        newStr = str.substring(str.indexOf('?')+1,str.length),//indexOf('?')得到的是？的索引值，从0开始，所以加1
        obj = {},
        arr = newStr.split('&');
        console.log(newStr);
    btn.onclick = function() {
        for(var i = 0;i<arr.length;i++) {
            var key = arr[i].split('=')[0],
                val = arr[i].split('=')[1];
            obj[key] = val;
        };
        newDiv.innerHTML = JSON.stringify(obj);
        box.appendChild(newDiv);
    };
};
//统计每个字符串出现的次数，并打印出来
function totleCase() {
    var box = document.getElementById('totle'),
        btn = document.getElementById('totleBtn'),
        newDiv = document.createElement('div'),
        str = box.innerText,
        obj = {};
    console.log(typeof str);
    for(var i=0;i<str.length;i++){
        var key = str.charAt(i);
        if(obj[key]){
            obj[key]++;
        }else {
            obj[key] = 1;
        };
    };
    btn.onclick = function() {
        newDiv.innerHTML = JSON.stringify(obj);
        box.appendChild(newDiv);
    };
};
//阻止默认行为
var link = document.getElementById('link');
function preventDefault() {
    link.onclick = function(e){
        if(e&&e.preventDefault) {
            e.preventDefault();
        }else {
            window.event.returnValue = false;
            return false;
        };
    };
};
//阻止冒泡
var item1 = document.getElementById('item1'),
    item2 = document.getElementById('item2'),
    item3 = document.getElementById('item3');
function stopPropation() {
    item1.onclick = function(e) {
        alert('item1');
        if(e&&e.stopPropation) {
            e.stopProPation();
        }else {
            window.event.cancelBubble = true;
            return false;
        };
    };
    item2.onclick = function() {
        alert('item2');
    };
    item3.onclick = function() {
        alert('item3');
    };
};
//提取字符串中的数字方法
function onlyNumber(){
// alert();
    var numOld1 = document.getElementById('numWrap1').innerHTML,
        btn1 = document.getElementById('numBtn1'),
        numWrap = document.createElement('div');
    btn1.onclick = function(){
        numWrap.innerHTML = parseInt(numOld1);
        modList1.appendChild(numWrap);
        numWrap.setAttribute('class','numWrap');
    };
};