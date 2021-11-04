var oInput = document.getElementById("log");
oInput.onclick = function() {
    
    var phone = document.getElementById("phone").value;
    // alert(phone);
	var pattern = /^1[34578][0-9]{9}$/;
    var str = phone;
    alert(pattern.test(str));

    var password = document.getElementById("password").value;
    var pattern = "^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$";
    var reg = password;
    alert(pattern.test(reg));

}