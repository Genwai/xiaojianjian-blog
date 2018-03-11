// 在layui.use 引入js
layui.use(["jquery", "form", "layedit", "flow", "util"], function() {
  var $ = layui.jquery;
  // 点赞+1：
  var newTotal;
  var oldTotal;

  $(".prase").click(function() {

    alert('aaa');
    if($(this).hasClass('prased')){
        alert('有ed')
     
        oldTotal = $(".prased").attr("total");
        console.log(oldTotal)
        newTotal = parseInt(oldTotal) -1;
       
        $(this).attr("total", newTotal);
        $(this).text(newTotal);
        
        $(this).removeClass('prased');
        $(this).addClass('prase');
    }else{
        oldTotal = $(".prase").attr("total");
        newTotal = parseInt(oldTotal) +1;
        $(this).attr("total", newTotal);
        $(this).text(newTotal);


        $(this).addClass('prased');
        $(this).removeClass('prase');
    }
        
        
  });


  
  $('.prased').click(function () {  
      alert('sss')
   
       
        

  })



});
