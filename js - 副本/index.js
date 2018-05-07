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


    function setLi(item){
        var html ='<li>' +
            '<a href="#" class="inactive active" id='+item.id+' data-id='+item.id+' data-name='+item.name+' data-self="0">'+item.name+'' +
            '<span class="fa fa-angle-right fr"></span></a>' +
            '<ul style="display:none"></ul>' +
            '</li>';
        return html;
    }
    getMenu();
    /* 后修改ajax */
    function getMenu(){
        $.ajax({
            type:"GET",
            url:"/admin/location?f_id="+$('#left_nav').data('location'),
            dataType: "json",
            success: function(data){
                console.log(data);
                for(var i=0; i<data.list.data.length; i++){
                    var html='';
                    html= setLi(data.list.data[i]);
                    $("#left_nav .oUl").append(html);
                }

                /* 三级导航 */
                $('#left_nav').on('click', '.inactive', function(){
                    inClick($(this));
                    var oId=$(this).attr("id");
                    var dataVal=$(this).attr("data-name");
                    dataId(this, oId, dataVal);
                });
            }
        });
    }

    function setLi2(item){
        var html ='<li>'+
            '<a href="#" class="inactiveOne active" id='+item.id+' data-id='+item.id+' data-name='+item.name+' data-self="0">'+item.name+''+
            '<span class="fa fa-angle-right fr"></span></a>'+
            '<ul class="shequ" style="display:none">'+
            '</ul>'+
            '</li>';
        return html;
    }

    function setLi3(item){
        var html ='<li>'+
            '<a href="#" class="inactiveTwo active" id='+item.id+' data-id='+item.id+' data-name='+item.name+' data-self="0">'+item.name+''+
            '<span class="fa fa-angle-right fr"></span></a>'+
            '<ul class="shequ" style="display:none"></ul>' +
            '</li>';
        return html;
    }

    function dataId(dom, dataId, dataVal){
        $dom = $(dom).siblings('ul');
        $.ajax({
            type:"GET",
            url:"/admin/location?f_id="+dataId,
            dataType: "json",
            success: function(data){
                $dom.empty();
                var shequ=dataVal.indexOf("社区");
                if(shequ == -1){
                    var html='';
                    html ='<li><a href="#" data-id='+dataId+' data-self="1">'+dataVal+'本级<span class="fa fa-angle-right fr"></span></a></li>';
                }
                $dom.append(html);
                for(var i=0; i<data.list.data.length; i++){
                    var html1='';
                    html1 = setLi2(data.list.data[i]);
                    $dom.append(html1);
                }
                $('.inactiveOne').click(function(){
                    inClick($(this));
                    var oId=$(this).attr("id");
                    var dataVal=$(this).attr("data-name");
                    dataId1(this, oId, dataVal);
                });
            }
        });
    }

    function dataId1(dom1, dataId1, dataVal1){
        $dom1 = $(dom1).siblings('ul');
        $.ajax({
            type:"GET",
            url:"/admin/location?f_id="+dataId1,
            dataType: "json",
            success: function(data){
                $dom1.empty();
                var shequ=dataVal1.indexOf("社区");
                if(shequ == -1){
                    var html='';
                    html ='<li><a href="#" data-id='+dataId1+' data-self="1">'+dataVal1+'本级<span class="fa fa-angle-right fr"></span></a></li>';
                }
                $dom1.append(html);
                for(var i=0; i<data.list.data.length; i++){
                    var html2='';
                    html2 = setLi3(data.list.data[i]);
                    $dom1.append(html2);
                }

                $('.inactiveTwo').click(function(){
                    inClick($(this));
                    var oId=$(this).attr("id");
                    var dataVal=$(this).attr("data-name");
                    /*dataId2(this, oId, dataVal);*/
                });
            }
        });
    }

    /*function dataId2(dom1, dataId1, dataVal1){
        $dom1 = $(dom1).siblings('ul');
        $.ajax({
            type:"GET",
            url:"/admin/location?f_id="+dataId1,
            dataType: "json",
            success: function(data){
                $dom1.empty();
                var html='';
                html ='<li><a href="#" data-id='+dataId1+' data-self="1">'+dataVal1+'本级<span class="fa fa-angle-right fr"></span></a></li>';
                $dom1.append(html);
            }
        });
    }*/

    /* 三级导航 */
    function inClick(thisO){
        if($(thisO).siblings('ul').css('display')=='none'){
            $(thisO).parent('li').siblings('li').removeClass('inactives');
            $(thisO).parent('li').siblings('li').children('a').removeClass('active1');
            $(thisO).children('span').removeClass('active');
            $(thisO).addClass('inactives');
            $(thisO).addClass('active1');
            $(thisO).children('span').addClass('active');
            $(thisO).siblings('ul').slideDown(100).children('li');
            if($(thisO).parents('li').siblings('li').children('ul').css('display')=='block'){
                $(thisO).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('inactives');
                $(thisO).parents('li').siblings('li').children('ul').slideUp(100);
            }
        }else{
            //控制自身变成+号
            $(thisO).removeClass('inactives');
            $(thisO).addClass('active1');
            $(thisO).children('span').removeClass('active');
            //控制自身菜单下子菜单隐藏
            $(thisO).siblings('ul').slideUp(100);
            //控制自身子菜单变成+号
            $(thisO).siblings('ul').children('li').children('ul').parent('li').children('a').addClass('inactives');
            //控制自身菜单下子菜单隐藏
            $(thisO).siblings('ul').children('li').children('ul').slideUp(100);
            //控制同级菜单只保持一个是展开的（-号显示）
            $(thisO).siblings('ul').children('li').children('a').removeClass('inactives');
            $(thisO).removeClass('active1');
        }
    }

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

$(function(){
    $('body').on('click', '.oUl a', function(e){
        e.preventDefault();
        $this = $(this);
        var location = $this.data('id');
        var isSelf = $this.data('self');

        $.postData('/admin/setLocation', {
            'location':location,
            'isSelf':isSelf
        }, function(res){
            if(res.result.code == 1){
                $('#right_iframe')[0].contentWindow.location.href='/admin/location?iframe=1&location='+location+'&timestamp='+(new Date()).getTime();
            }
        });
    });

    $('body').on('click', '#mainA', function(){
        $('#right_iframe')[0].contentWindow.location.href='/admin/location?iframe=1&location='+$(this).data('location')+'&isSelf=0';
    });


});
