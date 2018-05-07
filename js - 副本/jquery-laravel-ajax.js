/**
 * Created by Administrator on 2017/12/12.
 */
$.extend({
    postData: function (url, data, success, err) {
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: url,
            data: data,
            type: 'post',
            success: success,
            error: function (res) {
                if (err) {
                    if (err(res)) {
                        if (res.status == 422) {
                            str = "";

                            $.each(res.responseJSON.errors, function (k, v) {

                                str += v[0] + ",";
                            });
                            try {
                                layer.alert(str);
                            } catch (exception) {
                                alert(str);
                            }
                        }
                    }
                } else {
                    if (res.status == 422) {
                        str = "";
                        console.log(res.responseJSON.errors);
                        $.each(res.responseJSON.errors, function (k, v) {

                            str += v[0] + ",";
                        });
                        try {
                            layer.alert(str);
                        } catch (exception) {
                            alert(str);
                        }
                    }
                }
            },
            complete:function(){
                if(typeof(NProgress) != 'undefined'){
                    NProgress.done();
                }
            }
        });
    },

    putData: function (url, data, success, err) {
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: url,
            data: data,
            type: 'put',
            success: success,
            error: function (res) {
                if (err) {
                    if (err(res)) {
                        if (res.status == 422) {
                            str = "";

                            $.each(res.responseJSON.errors, function (k, v) {

                                str += v[0] + ",";
                            });
                            try {
                                layer.alert(str);
                            } catch (exception) {
                                alert(str);
                            }
                        }
                    }
                } else {
                    if (res.status == 422) {
                        str = "";
                        console.log(res.responseJSON.errors);
                        $.each(res.responseJSON.errors, function (k, v) {

                            str += v[0] + ",";
                        });
                        try {
                            layer.alert(str);
                        } catch (exception) {
                            alert(str);
                        }
                    }
                }
            },
            complete:function(){
                if(typeof(NProgress) != 'undefined'){
                    NProgress.done();
                }
            }
        });
    },

    getData: function (url, data, success, err) {
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },

            url: url,
            data: data,
            type: 'get',
            success: success,

            error: function (res) {
                if (err) {
                    if (err(res)) {
                        if (res.status == 422) {
                            str = "";
                            $.each(res.responseJSON.errors, function (k, v) {
                                str += v + ",";
                            });
                            try {
                                layer.alert(str);
                            } catch (exception) {
                                alert(str);
                            }
                        }
                    }
                } else {
                    if (res.status == 422) {
                        str = "";
                        $.each(res.responseJSON.errors, function (k, v) {
                            str += v + ",";
                        });
                        try {
                            layer.alert(str);
                        } catch (exception) {
                            alert(str);
                        }
                    }
                }

            },
            complete:function(){
                if(typeof(NProgress) !=  'undefined'){
                    NProgress.done();
                }
            }
        });
    },
    log: function (info) {
        console.log(info);
    },
    alert: function (str, func) {
        try {
            layer.alert(str, func);
        } catch (e) {
            try {
                layui.use('layer', function () {
                    layui.layer.alert(str, func);
                });
            } catch (e) {
                alert(str);
                if(typeof (func) != 'undefined'){
                    func();
                }
            }

        }
    },
    confirm: function (str, success, err) {
        try {
            var index = layer.confirm(str, function (index) {
                success();
                layer.close(index);
            }, err);

        } catch (e) {
            try {
                layui.use('layer', function () {
                    layui.layer.confirm(str, function (index) {
                        success();
                        layer.close(index);
                    }, err);
                });
            } catch (e) {
                var res = confirm(str);
                if (res) {
                    success();
                } else {
                    err();
                }
            }
        }
    },
    msg: function (msg) {
        try {
            layer.msg(msg);
        } catch (e) {
            try {
                layui.use('layer', function () {
                    layui.layer.msg(msg);
                });
            }catch(e){
                alert(msg)
            }
        }
    },
    load: function(){
        _this = this;
        var index;
        try {
            index = layer.load(1);
        }catch (e){
            layui.use('layer', function(){
                index = layui.layer.load(1);
            });
        }

        return index;
    },
    close: function(){
        try {
            layer.closeAll();
        }catch (e){
            layui.use('layer', function(){
                layui.layer.closeAll();
            });
        }
    },
    date: function(dom){
        layui.use('laydate', function () {
            var laydate = layui.laydate;
            laydate.render({
                elem: dom
            });
        });
    },
    datetime: function(dom){
        layui.use('laydate', function () {
            var laydate = layui.laydate;
            laydate.render({
                elem: dom,
                type:'datetime'
            });
        });
    },
    time: function(dom){
        try {
            laydate.render({
                elem: dom,
                type:'time'
            });
        }catch(e){
            layui.use('laydate', function () {
                var laydate = layui.laydate;
                laydate.render({
                    elem: dom,
                    type:'time'
                });
            });
        }

    }
});