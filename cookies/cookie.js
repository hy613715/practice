// by hy

// 设置cookie
// 这里过期时间设置成分钟，可以设置成小时oDate.setHours，也可以设置成天oDate.setDate
function setCooike(name,value,minute){
    var oDate = new Date();
    oDate.setMinutes(oDate.getMinutes() + minute);
    document.cookie = name + '=' + value + ';expires=' + oDate;
};

// 获取cookie
function getCookie(name) {
    var arr = document.cookie.split('; '); //cookie为一个由分号+空格分隔的字符串，这里是将其切割成数组
    for(var i=0;i<arr.length;i++){
        var subArr = arr[i].split('=');
        if(subArr[0] == name){
            return subArr[1];
        }
    }
    return ''; //如果name不存在，返回空值
}

//删除cookie
function removeCookie(name) {
    //中间的'1'可以设置成任意值
    setCooike(name,'1',-1)
}