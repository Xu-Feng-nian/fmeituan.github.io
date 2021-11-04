//使JS文件后加载
window.onload = function () {
    //节点获取
    //获取span
    var phone = document.getElementsByName("phone");
    var span = document.getElementsByTagName("span");
    phone[0].onfocus = function () {
        phone[0].style.border = "1px solid #FFD000";
    };
    //判断手机号码
    phone[0].onblur = function () {
        var phoneValue = phone[0].value;
        //判断手机号是否为空
        if (phoneValue === '') {
            // console.log('手机号码不能为空');
            span[0].className = 'display-inline icon-times-circle';
            span[0].innerHTML = '手机号码不能为空！';
        }
        //点击后丢失焦点
        //判断手机号码
        phone[0].onblur = function () {
            //点击丢失焦点后更改边框颜色
            // console.log(1);
            // phone[0].style.border="1px solid red";

            var phoneValue = phone[0].value;
            //判断电话号码输入不为空
            if (phoneValue === '') {
                // console.log('手机号码不能为空！')
                span[0].className = 'display-inline icon-times-circle';
                span[0].innerHTML = '手机号码不能为空！';
            } else if (phoneValue != '') {
                //正则匹配
                var off = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(phoneValue);
                // console.log(off);
                if (off) {
                    span[0].className = 'display-inline icon-check-circle';
                    span[0].innerHTML = '手机号码正确！';
                } else {
                    span[0].className = 'display-inline icon-times-circle';
                    span[0].innerHTML = '请填写正确的手机号码！';
                }
            }
            // console.log(phoneValue);
            //判断手机号码是否正确
        };
    }
    //发送验证码
    var button = document.getElementsByTagName("button")[0];
    //生成从minNum到maxNum的随机数\
    button.onclick = function () {
        function randomNum(minNum, maxNum) {
            switch (arguments.length) {
                case 1:
                    return parseInt(Math.random() * minNum + 1, 10);
                    break;
                case 2:
                    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                    break;
                default:
                    return 0;
                    break;
            }
        }
        span[1].className = 'display-inline';
        span[1].innerHTML = randomNum(1000, 9999);
    }
    var code = document.getElementById("code");
    code.onfocus = function () {
        code.style.border = "1px solid #FFD000";
    }
    code.onblur = function () {
        var codeValue = code.value;
        if (codeValue === '') {
            span[2].className = 'display-inline icon-times-circle';
            span[2].innerHTML = '验证码不能为空！';
        } else if (codeValue != '') {
            if (codeValue == span[1].innerHTML) {
                span[2].className = 'display-inline icon-check-circle';
                span[2].innerHTML = '验证码正确！';
            } else {
                span[2].className = 'display-inline icon-times-circle';
                span[2].innerHTML = '验证码错误！';
            }
        }
    }
    var password = document.getElementById("password");
    var passwordValue = password.value;
    var tips = document.getElementById("tips");
    var tipsB = tips.getElementsByTagName("b");
    //初始化字符串
    var aStr = ["弱","中","强","安全"];
    //判断用户输入键盘监听
    password.onkeyup=function(){
        // console.log(1);
        var passwordValue = password.value;
        var num = checkStrong(passwordValue);
        // log
        // console.log(num);
        switch(num){
            case 0:
                tipsB[0].style.background="red";
                tipsB[0].innerHTML = aStr[0];
            break;
            case 1:
                tipsB[0].style.background="red";
                tipsB[0].innerHTML = aStr[0];
            break;
            case 2:
                tipsB[1].style.background="yellow";
                tipsB[1].innerHTML = aStr[1];
            break;
            case 3:
                tipsB[2].style.background="green";
                tipsB[2].innerHTML = aStr[2];
            break;
            case 4:
                tipsB[3].style.background="green";
                tipsB[3].innerHTML = aStr[3];
            break;
        }
    }
    function checkStrong(val){
        var modes =0;
        if(val.length<8) return 0;
        if(/\d/.test(val)) modes++;
        if(/[a-z]/.test(val)) modes++;
        if(/[A-Z]/.test(val)) modes++;
        if(/\W/.test(val)) modes++;
        if(val.length>20) return 4;
        return modes;
    }
    var passrepeat = document.getElementById("passrepeat");
    
    passrepeat.onfocus = function(){
        passrepeat.style.border= "1px solid #FFD000";
    }
    passrepeat.onblur = function(){
        var passrepeatValue = passrepeat.value;
        if(passrepeatValue===''){
            span[3].className = 'display-inline icon-times-circle';
            span[3].innerHTML = '密码不能为空！';
        }else if(passrepeatValue!=''){
            if(passrepeat.value == password.value){
                span[3].className = 'display-inline icon-check-circle';
                span[3].innerHTML = '密码正确！';
            }else{
                span[3].className = 'display-inline icon-times-circle';
                span[3].innerHTML = '与创建密码不符！';
            }
        }
    }
}
