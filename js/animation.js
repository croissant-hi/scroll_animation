function scrollAnim(){
    var scroll = $(window).scrollTop();
    var wHeight = $(window).height();

    $('.anim').each(function(){
        var position = $(this).offset().top;
        var thisHeight = $(this).height();

        if (scroll > position - wHeight && scroll < position + thisHeight){
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}
$(window).on('scroll', function() {
    scrollAnim();
});
$('body').on('touchmove', function() {
    scrollAnim();
});
