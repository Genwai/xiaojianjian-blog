layui.use(['jquery', 'carousel'], function() {
    var $ = layui.jquery;
    $('.yearToggle').click(function() {
        $(this).parents('.timeline-data').children('.timeline-month').slideToggle('slow');
        $(this).children('i').toggleClass('fa-caret-down fa-caret-right')
    })

    $('.monthToggle').click(function() {
        $(this).parents('h3').siblings('ul').slideToggle('slow');
        $(this).children('i').toggleClass('fa-caret-down fa-caret-right')
    })
});