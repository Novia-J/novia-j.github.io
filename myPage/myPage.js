$(document).ready(function(){
    var sections = $(".main_right");
    var menu_links = $(".main_navi ul li a");
    
    $(window).scroll(function(){
        if (sections.filter(":in-viewport:last").attr("id") == sections.last().attr("id")) {
            menu_links.removeClass("active");
            menu_links.last().addClass("active");
        }
        else {
            sections.filter(":in-viewport:first").each(function(){
                var active_section = $(this);
                var active_link = $('.main_navi ul li a[href="#' + active_section.attr("id") + '"]');
                menu_links.removeClass("active");
                active_link.addClass("active");
            });
        }
    });
    $(window).trigger('scroll');
});
