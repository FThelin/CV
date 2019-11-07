$(document).ready(() => {  

    let top = -300;

    $('.running-man').mouseover(() => {
        
        if (top >= -600) {
            $('.running-man img').animate({
                top: top
            },'slow')
            top -= 300;
        }
        
    })







})