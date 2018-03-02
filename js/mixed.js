var picts = {
    'data': [
        { "src": 'images/pic/1.jpg', "alt": "盘中餐" },
        { "src": "images/pic/2.jpg", "alt": "向日葵" },
        { "src": "images/pic/3.jpg", "alt": "日出" },
        { "src": "images/pic/4.jpg", "alt": "水果拼盘" },
        { "src": "images/pic/5.jpg", "alt": "花园" },
        { "src": "images/pic/6.jpg", "alt": "红花" }
    ]
}

layui.use('flow', function() {
    var $ = layui.jquery; //不用额外加载jQuery，flow模块本身是有依赖jQuery的，直接用即可。
    var flow = layui.flow;
    var count = picts.data.length - 1;

    flow.load({
        elem: '.mixed-box', //指定列表容器
        isAuto: true,
        end: '没有更多图片啦，不要再往下拉了，求求你了',
        done: function(page, next) { //到达临界点（默认滚动触发），触发下一页
            var lis = [];
            //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
            for (let i = 0; i < 8; i++) {
                if (count < -1) {
                    break;
                }
                if (count == -1) {
                    lis.push('<div class="mixed-pic-box shadow animated zoomIn"> ' +
                        '<div class = "mixed-pics" >' +
                        '<a >' +
                        '<img src = "images/pic/0.jpg" alt = "" srcset = "" > </a> </div > <p class = "mixed-name" >' +
                        '最后一张是为空哦 </p> <hr> <div class = "mixed-btns" > <span class = "layui-btn layui-btn-primary layui-btn-xs" ><i class = "fa fa-eye fa-fw" > </i>查看 </span > <span class = "layui-btn layui-btn-primary layui-btn-xs" >' +
                        '<i class = "fa fa-download fa-fw" > </i>下载 </span > </div></div > ');
                } else {
                    lis.push('<div class="mixed-pic-box shadow animated zoomIn"> ' +
                        '<div class = "mixed-pics" >' +
                        '<a href="javascript:view('+ count+')">' +
                        '<img src = "' + picts.data[count].src + '" layer-src="' + picts.data[count].src + '" alt = "' + picts.data[count].alt + '" srcset = "" > </a> </div > <p class = "mixed-name" >' +
                        picts.data[count].alt + '</p> <hr> <div class = "mixed-btns" > <span class = "layui-btn layui-btn-primary layui-btn-xs" > <i class = "fa fa-eye fa-fw" ></i>查看 </span > <span class = "layui-btn layui-btn-primary layui-btn-xs" >' +
                        '<i class = "fa fa-download fa-fw" > </i>下载 </span > </div></div > ');
                }
                count--;
            }

            next(lis.join(''), page < picts.data.length/8);

        }
    });

    function view() {
        layer.photos({
            photos: '.mixed-pics>a'
            ,anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
          }); 
      }


});