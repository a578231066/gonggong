/*
    项目负责人：赵强
    项目创建日期:2018.3.23
    最新更新:2018.3.23
    修改人员:无
    修改日期:无
    修改原因:无
    修改代码行数区间:无
*/

/* 验证码 */
var code; //在全局 定义验证码  
function createCode() {
  code = "";
  var codeLength = 4;//验证码的长度  
  var checkCode = document.getElementById("checkCode");
  var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);//所有候选组成验证码的字符，当然也可以用中文的  
 
  for (var i = 0; i < codeLength; i++) {
    var charIndex = Math.floor(Math.random() * 10);
    code += selectChar[charIndex];
  }
  //alert(code);
  if (checkCode) {
    checkCode.className = "code";
    checkCode.value = code;
  }
}
 
function validate() {
  var inputCode = document.getElementById("input1").value;
  if (inputCode.length <= 0) {
    alert("请输入验证码！");
  }
}



$(function(){
    var h=$(window).height();
    $("body").height(h+"px");

    function clic(){
      var oInp=$(".login div.right p input");
      console.log(oInp);
      for(var i=0; i<oInp.length-2; i++){
        var oVal=oInp.eq(i).val();
        if(oVal==""){
          alert("登录信息不能为空");
          return;
        }
      }

      var oThree=oInp.eq(2).val();
      var oFour=oInp.eq(3).val();
      console.log(oThree);
      console.log(oFour);
      // if(oThree != oFour){
      //   alert("验证码输入错误");
      // }else{
      //   window.location.href="index.html";
      // }

        $('#form').submit();
    }

    /* 鼠标点击提交 */
    $(".login div.rightDown .button button").click(function(){
      clic();
    });

    /* 键盘提交 */
    $('body').keydown(function(e){
      if(e.keyCode == 13){
          clic();
      }
  });
});