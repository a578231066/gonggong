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
    //tabs部分
    $("#news li").click( function(){
        var num=$(this).index();
        i=num;
        $("#news li").removeClass("active");//移除类名   
        $(this).addClass("active");//添加类名
        //cons内容部分
        $("#news .cons>form>div").removeClass("on");
        $("#news .cons>form>div").eq(num).addClass("on");
        for(var j=0;j<num;j++){
            $("#news .picture li").eq(j).addClass('active')
        }
    });
    

    /* 点击按钮 */
    var i=0;
    var oNum=$("#news .picture li").size();
    $("#news .cons div.down a.xiayixiang").click(function(){
        console.log(i);
        move();
        $("#news .picture li").eq(i).addClass('active');
    });

    $("#news .cons div.down a.button").click(function(){
        i-=2;
        $("#news .picture li").eq(i+2).removeClass('active');
        move();
        
    });
    
    function move(){
        i++;
        console.log(i);
        if(i==oNum){
            i=0;
        }
        if(i<0){
            i=oNum-1;
        }
        $("#news .cons>form>div").eq(i).addClass("on").siblings().removeClass("on");
    }

    /* 点击返回 */
    $(".main .top .edit p:last-child").click(function(){
        window.location.href="home.html";
    });

    var h=$(document).height();
    $(".zhedang").height(h+"px");

    /* 验证是否为空 */
    function formInp(){
        for(var i=0; i<$(".main .on .form div").length; i++){
            var oVal=$(".main .on .form input").eq(i).val();
            if(oVal == ""){
                $(".main .on .form div").eq(i).children('em').css({display: 'block'});
            }else{
                $(".main .on .form div").eq(i).children('em').css({display: 'none'});
            }
        }
        var oVal0=$(".main .on .form input").eq(0).val();
        var oVal1=$(".main .on .form input").eq(1).val();
        var oVal2=$(".main .on .form input").eq(2).val();
        var oVal3=$(".main .on .form input").eq(3).val();
        var oVal4=$(".main .on .form input").eq(4).val();
        var oVal5=$(".main .on .form input").eq(5).val();
        if( oVal0 && oVal1 && oVal2 && oVal3 && oVal4 && oVal5 != ""){
            $(".main .down a:last-child").removeClass('disabled');
        }else{
            $(".main .down a:last-child").addClass('disabled');
        }

        if( oVal0 && oVal1 != ""){
            $(".main .down a.twoXia").removeClass('disabled');
        }else{
            $(".main .down a.twoXia").addClass('disabled');
        }
    }

    function btnInp(){
        for(var i=0; i<$(".main .cons input").length; i++){
            var oVal=$(".main .cons input").eq(i).val();
            if(oVal == ""){
                $(".main .on .form div").eq(i).children('em').css({display: 'block'});
            }else{
                $(".main .on .form div").eq(i).children('em').css({display: 'none'});
            }
        }
        if(oVal ==""){
            alert("信息必须全部填写,不能为空");
        }else{
            $(".tishi .zhedangDown p").empty();
            $(".tishi,.zhedang").css({display: 'block'});
            $(".tishi .zhedangDown p").append('确认提交将无法修改<br />可以先预览信息，确认无误');
            $(".tishi .zhedangDown a:last-child").hide();
            return;
        }
    }

    /* 点击提交弹框 */
    $(".main .zhedangDown button").click(function(){
        var oInp=$(".main .top .on .form div input");
        for(var i=0; i<oInp.length; i++){
            console.log($(this).val());
        }
    });

    /* 点击提交按钮 */
    $(".main .down .tijiao").click(function(){
        btnInp();
    });

    $(".tishi .zhedangDown .anButton a:first-child").click(function(){
        $(".tishi .zhedangDown p").empty();
        $(".tishi .zhedangDown a:first-child,.tishi .zhedangDown a:nth-child(2)").hide();
        $(".tishi .zhedangDown a:last-child").show();
        $(".tishi .zhedangDown p").append('公共图书信息<br />提交成功')
    });

    $(".tishi .zhedangDown a:last-child").click(function(){
        window.location.href="home.html";
    });

    /* 关闭提示窗 */
    $(".tishi .top span").click(function(){
        $(".tishi .zhedangDown a:first-child,.tishi .zhedangDown a:nth-child(2)").show();
        $(".tishi,.zhedang").css({display: 'none'});    
    });


});