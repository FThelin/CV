$(document).ready(() => {  

    /**
     * Navbar goes on top and stays on top when scrolling
     */
    $(window).scroll(() => {
    if ($(window).scrollTop() >= $('.bottom-container').offset().top) {
        $('.bottom-container').css({
            position: 'fixed',
            top: 0,
            left: 0
        }).animate({height: '7vh'},'slow');

        $('.nav-container div').animate({
            height: '2.5rem',
            width: '2.5rem'
        },'slow')
        $('.nav-container i').animate({fontSize: '1.2rem'},'slow');
        $('.nav-container').css('flex-direction', 'row');
    }
});

    /**
     * Navbar hover effects
     */
    $('.nav-container').mouseover(function() {
        $(this).css('backgroundColor', 'rgb(71, 90, 107)');
        $('div', this).css( 'boxShadow', '0 0 5px rgb(0, 157, 230), 0 0 25px rgb(0, 157, 230)');
    })

    $('.nav-container').mouseout(function() {
        $(this).css('backgroundColor', 'rgb(31, 49, 68)');
        $('div', this).css( 'boxShadow', 'none');
    })
})