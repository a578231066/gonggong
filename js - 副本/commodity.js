/*
    项目负责人：赵强
    项目创建日期:2017.8.10
    最新更新:2017.8.10
    修改人员:无
    修改日期:无
    修改原因:无
    修改代码行数区间:无
*/
$(function(){
    var h=$(window).height();
    $(".main").height(h-28+"px");
/* 隔行换色 */
    jQuery.changeColor = function (ulid) {
        var liset = $(".head").find("thead");
        for (var i = 2; i < liset.length; i += 2) {
            liset.eq(i).css({background: '#e1e1e1'});
        }
    }
    $.changeColor("#mytest");

    $("footer div.one div.fl button").click(function(){
        $(this).addClass('active').siblings().removeClass("active");
    });

    $(".edit_one").click(function(){
        $("#zhedang1").show();
        $(".edit1").slideDown(800);
    });

    $(".gb").click(function(){
        $("#zhedang1").hide();
        $(".edit1").slideUp(800);
    });

    /* 点击删除 */
    $(".operation .dele").click(function(){
        submitFun1();
    });

    function submitFun1(){
        $("#zhedang").show();
        $("#tishi").show();
        $(".enter").append("<p>是否删除此条信息</p>");

        $("#btn2").click(function(){
            $(".enter").empty();
            $("#zhedang").hide();
            $("#tishi").hide();
        });

        $("#btn1").click(function(){
            $(".enter").empty();

        });
    }


    $(".del").click(function(){
        submitFun();
    });


    function submitFun(){
        $("#zhedang").show();
        $("#tishi").show();
        $(".enter").append("<p>是否确定删除</p>");

        $("#btn2").click(function(){
            $(".enter").empty();
            $("#zhedang").hide();
            $("#tishi").hide();
        });

        $("#btn1").click(function(){
            $(".enter").empty();

        });
    }

});

/* 全选按钮 */
    var oAll=document.getElementById("anniu");
    var oName=document.getElementsByName("probuct");
    oAll.onclick=function(){
        for(var i=0; i<oName.length;i++){
            oName[i].checked=oAll.checked;//如果oAll被选中,那么所有的oName都被选中
        }
    }

    var oAll=document.getElementById("anniu");
    var oName=document.getElementsByName("probuct");
    oAll.onclick=function(){
        for(var i=0; i<oName.length;i++){
            oName[i].checked=oAll.checked;//如果oAll被选中,那么所有的oName都被选中
        }
    }

        
    function show(){
        var flag=true;//标志位
        for(var i=0;i<oName.length;i++){
            if(oName[i].checked==false){
                flag=false;
                break;//中断退出循环   
            }
        }
        oAll.checked=flag;
    }

/* 点击修改内容 */
    function cg(obj){
        var o=obj.previousSibling;
        if(o.childNodes[0].value) {
            o.innerHTML =  o.childNodes[0].value;
        }else{
            o.innerHTML="<input type='text' value='"+o.innerHTML+"' />";
        }
    }
