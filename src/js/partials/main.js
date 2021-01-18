var $page = $('html, body');
$('a.next-link').click(function(e) {
    e.preventDefault();
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

if($(window).width() < 769){
    $('.revealator-slideleft').removeClass('revealator-slideleft revealator-once revealator-delay3');
    $('.revealator-slideright').removeClass('revealator-slideright revealator-once revealator-delay3');
}