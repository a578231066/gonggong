/*
    项目负责人：赵强
    项目创建日期:2018.3.23
    最新更新:2018.3.23
    修改人员:无
    修改日期:无
    修改原因:无
    修改代码行数区间:无
*/

$(function(){
    var inputs=$(".main .mainDown li p input");
    $(".main .mainTop a:last-child span").click(function(){
        for(var i=0;i<inputs.length;i++){
            $(".main .mainDown li p input").prop("disabled",false);
            $(".main .mainDown li p input").addClass('active');
        }
        $(".main .tijiao").css({display: 'block'});
        return;
    });

    $(".main .tijiao a button:last-child").click(function(){
        for(var i=0;i<inputs.length;i++){
            $(".main .mainDown li p input").prop("disabled",true);
            $(".main .mainDown li p input").removeClass('active');
        }
        $(".main .tijiao").css({display: 'none'});
        return;
    });


    $.ajax({
        type: "GET",
        url: "https://http://192.168.3.19/admin/tushuguan",
        data: {
            yjjgsl : 4,
            zijian : '',
            gongjian : '',
            qita : '',
            jianzhumianji: '',
            yidabiao: '',
            yingpeitao: '',
            yipeitao: '',
            bianzhishu: '',
            zhenggaoji: '',
            fugaoji: '',
            zhongji: '',
            qitazhuanyejishurenyuan: '',
            guyuan: '',
            xingzheng: '',
            shiwu: '',
            dianzi: '',
            zongliutong: '',
            mianfeikaifang: '',
            wenyihuodong: '',
            peixunban: '',
            zanlan: '',
            qitahuodong: '',
            jisuanji: '',
            bennianshouru: '',
            bennianzhichu: '',
            zicanheji: ''
        },
        dataType: "json",
        success: function(data){
            console.info(data);
        },
        error:function(){

        }
    });


});