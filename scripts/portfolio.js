$(document).ready(() => {  

    $('.project-mm-image').mouseover(() => {
        $('.project-info').css('opacity', '1');
        $('.overlay').css('opacity', '1');
    })

    $('.project-mm-image').mouseout(() => {
        $('.project-info').css('opacity', '0');
        $('.overlay').css('opacity', '0');
    })




})