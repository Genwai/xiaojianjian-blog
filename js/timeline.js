// 一种数据格式
// var data =[
//     {
//         'year':'2017',
//         'month':'03月',
//         'day':[
//             {
//                 'time':'03月01日 12:20',
//                 'content':'制做静态网页，完全没有连接数据库，没有后台语言，纯前端！'
//             }
//         ]
//     }
// ]
var data =[
    {
        'year':'2017',
        'month':[
            {
                'title':'03月',
                'day':[
                    {
                        'time':'03月01日 14:59',
                        'content':'制做静态网页，完全没有连接数据库，没有后台语言，纯前端！'
                    }
                ]
            }
        ],
        
    }
]
// 写循环还是要注意一些问题；

layui.use(['jquery', 'carousel'], function() {
    var $ = layui.jquery;

    for (let y = 0; y < data.length; y++) {
       var html ='<div class="timeline-year">'
        +'<h2 class="timeline-h2">'
        +'  <a class="yearToggle  animated fadeInLeft">'+data[y].year +
        +' <i class="fa fa-caret-down fa-fw size"></i>'
        +'</a>'
        +'  </h2>'
        +' </div>'
        var month = data[y].month;
        for (let m = 0; m < month.length; m++) {
             html ='<div class="timeline-month">'
            +' <h3 class="timeline-h3">'
            +' <a class="monthToggle  animated fadeInLeft">'+ month[m].title+
            +'  <i class="fa fa-caret-down fa-fw size"></i>'
            +'   </a>'
            +'   </h3>'
            +'   <ul class="tiemline-ul">'
           
            var day= month[m].day
            for (let d = 0; d < day.length; d++) {
                html=   '<li>'
              + '<div class="timeline-h4  animated fadeInLeft">'
            +'          <p class="data">'+day[d].time +'</p>'
            +'       </div>'
            +'     <p class="timeline-p">'
            +'         <i class="fa fa-dot-circle-o"></i>'
            +'     </p>'
            +'    <div class="timeline-text animated fadeInRight">'+day[d].content +'</div>'
            +'     <div class="clear"></div>'
            +'  </li>'
            }
            html = ' </ul></div>'  
        }
        html='</div>';
        $('.timeline-data').append(html);
        alert(1)
    }



    $('.yearToggle').click(function() {
        $(this).parents('.timeline-data').children('.timeline-month').slideToggle('slow');
        $(this).children('i').toggleClass('fa-caret-down fa-caret-right')
    })

    $('.monthToggle').click(function() {
        $(this).parents('h3').siblings('ul').slideToggle('slow');
        $(this).children('i').toggleClass('fa-caret-down fa-caret-right')
    })
});