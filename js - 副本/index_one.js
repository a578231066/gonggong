/*
    项目负责人：赵强
    项目创建日期:2018.3.22
    最新更新:2018.3.22
    修改人员:无
    修改日期:无
    修改原因:无
    修改代码行数区间:无
*/

/* 三级导航 */
function two(id){
    var object=document.getElementById(id);
    if(object.style.display=="block" || object.style.display==""){
        object.style.display="none";
        var ob2=document.getElementById('s'+id);
    }else{
        object.style.display="block";
        var ob2=document.getElementById('s'+id);
    }  
}
function three(id){
    var object=document.getElementById(id);  
    if(object.style.display=="block"){
        object.style.display="none";
        var ob2=document.getElementById('s'+id);
    }else{
        object.style.display="block";
        var ob2=document.getElementById('s'+id);
    }  
}

$(function(){
    var h=$(window).height();
    $("#tishi").height(h+"px");
    $(".main #left_nav").height(h-86+"px");
    $(".main .dian_dn").height(h-86+"px");
    $(".main .right_iframe iframe").height(h-86+"px");
    $(".zhedang").height(h+"px");
    
    var one=$(".main #left_nav dd ul ul");
    var oP=$(".main #left_nav dd ul li.active");
    oP.click(function(){
        if(one.css('display') == 'block'){
            one.css({
                display: 'none'
            });
            $(this).addClass('active_one').removeClass('active');
        }else{
            one.css({
                display: 'block'
            });
            $(this).addClass('active').removeClass('active_one');
        }
    });
 


//成功后跳转页
    $("header .size .end").click(function(){
        $("#tishi").show();
        $("#tishi .top p span").append("<span>成功!</span>");
        $("#tishi .zhong").append('<span><img src="images/yes.jpg" />退出成功!</span>');
        var i=1;
        t=setInterval(function(){
            $("#tishi .down .miao").empty();
            $("#tishi .down .miao").append("<span>"+i+"</span>");
            if(i==0){
                $("#tishi").hide();
                clearInterval(t);
                window.location.href="login.html";
            }
            i--;
        },1000);
        $("#tishi .down .miao").empty();
    });

});