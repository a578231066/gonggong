/*
    项目负责人：赵强
    项目创建日期:2018.3.24
    最新更新:2018.3.24
    修改人员:无
    修改日期:无
    修改原因:无
    修改代码行数区间:无
*/

$(function(){
    $.ajax({
        type: "GET",
        url: "https://http://192.168.3.19/admin/tushuguan",
        data: {
            location : '',
            created_at : '',
            updated_at : '',
            edit : '',
        },
        dataType: "json",
        success: function(data){
            console.info(data);
        },
        error:function(){

        }
    });
});