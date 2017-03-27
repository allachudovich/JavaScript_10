$(function(){
    $('.banner--link').click(function(e) {
        e.preventDefault();
        var parentClass = $(this).parent().attr('class');
        if (parentClass == 'noactive') {
            $(this).parent().siblings().removeClass('active').addClass('noactive');
            $(this).parent().removeClass('noactive').addClass('active');
        }
        else {
            $(this).parent().removeClass('active').addClass('noactive');
        }
    })
});
