layui.use(['element', 'layer', 'util', 'form'], function() {
    var element = layui.element;
    var $ = layui.jquery;
    //分享工具
    // layui.util.fixbar({
    //     bar1: '&#xe641;',
    //     click: function(type) {
    //         if (type === 'bar1') {
    //             var sear = new RegExp('layui-hide');
    //             if (sear.test($('.blog-share').attr('class'))) {
    //                 shareIn();
    //             } else {
    //                 shareOut();
    //             }
    //         }
    //     }
    // });

    $('.layui-fixbar-i').click(function() {
        if ($('.blog-share').hasClass('layui-hide')) {
            $('.blog-share').removeClass('layui-hide');
            $('.blog-share').removeClass('bounceOutLeft');
            $('.blog-share').addClass('layui-show');
            $('.blog-share').addClass('bounceInRight');
        } else if ($('.blog-share').hasClass('layui-show')) {

            $('.blog-share').removeClass('layui-show');
            $('.blog-share').removeClass('bounceInRight');

            $('.blog-share').addClass('layui-hide');
            $('.blog-share').addClass('shareOut');

        }

    })


    // 分享点击事件 显示百度等分享
    function shareIn() {

        $('.blog-share').removeClass('shareIn');
        $('.blog-share').addClass('shareOut');
        $('.blog-share').removeClass('layui-show');

    }

    //  隐藏百度等 分享事件
    function shareOut() {
        $('.blog-share').removeClass('shareOut');
        $('.blog-share').addClass('shareIn');


    }
    // 背景设置
    $(function() {
        // isUser();
        //配置背景粒子
        var config = {
            vx: 4, //小球x轴速度,正为右，负为左
            vy: 4, //小球y轴速度
            height: 2, //小球高宽，其实为正方形，所以不宜太大
            width: 2,
            count: 200, //点个数
            color: "121, 162, 185", //点颜色
            stroke: "130,255,255", //线条颜色
            dist: 6000, //点吸附距离
            e_dist: 20000, //鼠标吸附加速距离
            max_conn: 10 //点到点最大连接数
        };
        //调用
        CanvasParticle(config);

        //百度统计
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?eb59b89197983e8991287fee2390f7de";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();

    });



});