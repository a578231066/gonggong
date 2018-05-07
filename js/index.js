/*
    项目负责人：赵强
    项目创建日期:2018.3.22
    最新更新:2018.3.22
    修改人员:无
    修改日期:无
    修改原因:无
    修改代码行数区间:无
*/
$(function(){
    var h=$(window).height();
    $("#tishi").height(h+"px");

    $.ajax({
        //请求方式为get
        type:"GET",
        //json文件位置
        url:"location.json",
        //返回数据格式为json
        dataType: "json",
        //请求成功完成后要执行的方法
        success: function(data){
            console.info(data);
        }
    });

    $(".main #left_nav").height(h-86+"px")
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
 

    $('.inactive').click(function(){
        if($(this).siblings('ul').css('display')=='none'){
            $(this).parent('li').siblings('li').removeClass('inactives');
            $(this).parent('li').siblings('li').children('a').removeClass('active1');
            $(this).addClass('inactives');
            $(this).addClass('active1');
            $(this).siblings('ul').slideDown(100).children('li');
            if($(this).parents('li').siblings('li').children('ul').css('display')=='block'){
                $(this).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('inactives');
                $(this).parents('li').siblings('li').children('ul').slideUp(100);
            }
        }else{
            //控制自身变成+号
            $(this).removeClass('inactives');
            $(this).addClass('active1');
            //控制自身菜单下子菜单隐藏
            $(this).siblings('ul').slideUp(100);
            //控制自身子菜单变成+号
            $(this).siblings('ul').children('li').children('ul').parent('li').children('a').addClass('inactives');
            //控制自身菜单下子菜单隐藏
            $(this).siblings('ul').children('li').children('ul').slideUp(100);
            //控制同级菜单只保持一个是展开的（-号显示）
            $(this).siblings('ul').children('li').children('a').removeClass('inactives');
            $(this).removeClass('active1');
        }
        
    });
    
    /*$("#left_nav .list .yiji").click(function(){
        $(this).children("li").addClass('active1').siblings().removeClass('active');
    });*/

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