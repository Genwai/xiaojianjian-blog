// 在layui.use 引入js

layui.use(["jquery", "form", "layedit", "flow", "util"], function() {
    var $ = layui.jquery;
    var form = layui.form;
    var math = Math.floor(Math.random() * 10);


    // 点赞+1 记录点赞数目：
    var newTotal = 0;
    var oldTotal = 0;




    // 提交评论 在下方显示
    form.on('submit(form-commmit-message)', function(data) {
        // 当前时间
        var time = moment().format('YYYY-MM-DD HH:mm:ss');
        var LeaveMessage = $('#layui-edit').val();

        if (LeaveMessage) {
            var html = '<li>' +
                '  <div class="comment-parent">' +
                '     <img src="images/user/8.jpg" alt="用户头像" class="about-user-img">' +
                '    <div class="about-user-name">' +
                '       章子怡' +
                '  </div>' +
                ' <div class="about-user-content">' + LeaveMessage +
                '</div>' +
                ' <p class="about-user-time">' +
                '    <i class="fa fa-clock-o"></i>' +
                '   <span class="about-user-comitTime">' + time + '</span>' +
                '  <a href="javascript:;" class="prase" total="0">0</a>' +
                ' <span class="about-user-huifu"><img src="images/huifu.png" alt="">回复</span>' +
                ' </p>' +
                '</div>' +
                '<hr class="about-parent-hr">' +
                '<div class="detail-replay-box layui-hide">' +
                '   <form class="layui-form" action="">' +
                '      <div class="layui-input-block">' +
                '         <textarea name="desc" id="replay" placeholder="请输入回复内容" class="layui-textarea"></textarea>' +
                '    </div>' +
                '     <div class="layui-form-btns">' +
                '       <button class="layui-btn layui-btn-xs" lay-submit="" lay-filter="formReplay">提交</button>' +
                '</div>' +
                '</form>' +
                '</div>' +
                '</li>'
            $('.blog-about-commit').prepend(html);

            $('#layui-edit').val("");
            layer.msg("回复成功", { icon: 1 });
            // 点赞点击
            praise();
            //回复点击
            replay();
        } else {
            //评论和留言的编辑器的验证
            layer.open({
                title: '警告',
                content: '至少得有一个字吧',
                icon: 5
            })
        }
        return false;

    });


    // 回复-小提交
    form.on('submit(formReplay)', function() {
        // 当前时间

        var time = moment().format('YYYY-MM-DD HH:mm:ss');
        var replay = $(this).parent().siblings().children().val();


        // console.log(replay)
        if (replay) {

            var html = '<div class="comment-child">' +
                '               <img src="images/user/4.jpg" alt="用户头像" class="about-user-img">' +
                '               <div class="about-child-name">' +
                '                 我是王菲' +
                '              </div>' +
                '            <div class="about-info">' + replay +
                '           </div>' +
                '           <p class="about-user-time">' +
                '             <i class="fa fa-clock-o"></i>' +
                '              <span class="about-user-comitTime">' + time + '</span>' +
                '             <a href="javascript:;" class="prase" total="0">0</a>' +

                '         </p>' +
                '        <hr style="margin-left:65px;">' +
                '    </div>'
            $('#replay').val("");
            $(this).parent().parent().parent().before(html);

            praise();
            layer.msg("回复成功", { icon: 1 });

        } else {
            //评论和留言的编辑器的验证
            layer.open({
                title: '警告',
                content: '至少得有一个字吧 ',
                icon: 5
            })
        }

        return false;


    })


    // // 点赞点击
    // praise();
    // //回复点击
    // replay();
    // //提交回复 

});

// 回复 显示textarea
function replay() {
    $('.about-user-huifu').click(function() {
        $(this).parent().parent().siblings('.detail-replay-box').toggleClass('layui-hide');
        if ($(this).text() == "回复") {
            $(this).html('<i class="fa fa-caret-square-o-up" style="font-size:18px;margin-right:5px; color:#1E9FFF"></i>收起')
        } else {
            $(this).html('<img src="images/huifu.png" alt="" srcset="">回复')
        }
        console.log('replay')
    });

}

// 点赞+1 -1
function praise() {
    $(".prase").click(function() {
        if ($(this).hasClass('prased')) {
            console.log('prase')
            oldTotal = $(".prased").attr("total");

            newTotal = parseInt(oldTotal) - 1;

            $(this).attr("total", newTotal);
            $(this).text(newTotal);

            $(this).removeClass('prased');
            $(this).addClass('prase');

        } else {
            console.log('prased')
            oldTotal = $(".prase").attr("total");
            newTotal = parseInt(oldTotal) + 1;
            $(this).attr("total", newTotal);
            $(this).text(newTotal);


            $(this).addClass('prased');
            $(this).removeClass('prase');
        }
    });

}