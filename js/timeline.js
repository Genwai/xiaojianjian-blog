var data = [{
        'year': '2017',
        'month': [{
            'title': '12月',
            'day': [{
                'time': '12月01日 15:60',
                'content': '第一次修改'
            }]
        }]
    }

]



layui.use(['jquery', 'carousel'], function() {
    var $ = layui.jquery;

    for (let y = 0; y < data.length; y++) {
        var html = '<div class="timeline-year">' +
            '<h2 class="timeline-h2">' +
            ' <a class="yearToggle  animated fadeInLeft">' + data[y].year +
            ' <i class="fa fa-caret-down fa-fw size"></i>' +
            ' </a></h2></div> '
        var month = data[y].month;
        for (let m = 0; m < month.length; m++) {
            html += '<div class="timeline-month"><h3 class="timeline-h3"><a class = "monthToggle  animated fadeInLeft" >' + month[m].title +
                '<i class = "fa fa-caret-down fa-fw size"> </i> </a> ' +
                '</h3><ul class="tiemline-ul">'
            var day = month[m].day;
            for (let d = 0; d < day.length; d++) {
                html += ' <li>' +
                    '  <div class = "timeline-h4  animated fadeInLeft" ><p class = "data" > ' + day[d].time + '</p> ' +
                    '</div > <p class = "timeline-p"><i class = "fa fa-dot-circle-o" ></i> ' +
                    '</p><div class ="timeline-text animated fadeInRight">' + day[d].content + ' </div>' +
                    '<div class = "clear"></div></li>'

            }
            html += '</ul></div> '
        }
        html += '</div>'

        $('.timeline-data').append(html)
    }


    $('.yearToggle').click(function() {
        // 这样写是bug ，当出现多条年限的时候，会把所有的.timeline-data都发生改变。这样是错误的
        // $(this).parents('.timeline-data').children('.timeline-month').slideToggle('slow');
        // 不能出现具体的类名
        $(this).parent().parent().next('.timeline-month').slideToggle('slow');
        $(this).children('i').toggleClass('fa-caret-down fa-caret-right');
    })

    $('.monthToggle').click(function() {
        $(this).parents('.timeline-h3').siblings('.tiemline-ul').slideToggle('slow');
        $(this).children('i').toggleClass('fa-caret-down fa-caret-right');
    })
})