$(function () {
    //         手机号失去焦点验证输入内容
    var phone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    $(".phone").on('blur', function () {
        if(!phone.test($('.phone').val())){
            $('.tips').show();
            $('.send').removeClass("adadad")
        }else {
            $('.tips').hide();
            $('.send').addClass("adadad")
        }
    })
    //         根据发送按钮是否有adadad类名来判断是否发起请求
    $('.send').on('click', function () {
        var formData = $('.phone').serialize();
        if(!$(this).hasClass('adadad')){
            return false;
        }else {
            alert(formData)
            /* $.ajax({
             type:'post',
             url:'send.php',
             data:formData,
             dataType:'json',
             })*/
            $('.tips2').show()
        }
    });
    //如果手机号通过并且验证码不为空则跳转到输入密码界面
    $("#modal-overlay2 #next").on('click', function () {
       /* var phone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        if($('.test_num').val()==""||!phone.test($('.phone').val())){
            return false;
        }else {
            window.location="password.html"
        }*/
    })
})