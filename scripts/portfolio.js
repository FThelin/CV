$(document).ready(() => {  

    let degree = 90;

    $('.outer-circle').click(() => {

        
        if (degree === 90){
            $('.outer-circle').css('transform', `rotate(${degree}deg)`);
            $('.outer-circle p').css('transform', `rotate(-${degree}deg)`);
            $('.tele2-image').css('opacity', '1');
            $('.inner-circle img').css('transform', `rotate(-${degree}deg)`);   
            degree = 180;
        } else if (degree === 180){
            $('.outer-circle').css('transform', `rotate(${degree}deg)`);
            $('.outer-circle p').css('transform', `rotate(-${degree}deg)`);
            $('.inner-circle img').attr('src', `../img/tele2.png`);
            $('.inner-circle img').css('transform', `rotate(-${degree}deg)`);     
            degree = 270;
        } else if (degree === 270){
            $('.outer-circle').css('transform', `rotate(${degree}deg)`); 
            $('.outer-circle p').css('transform', `rotate(-${degree}deg)`); 
            $('.inner-circle img').attr('src', `../img/tele2.png`);
            $('.inner-circle img').css('transform', `rotate(-${degree}deg)`);   
            degree = 0;
        } else if (degree === 0){
            $('.outer-circle').css('transform', `rotate(${degree}deg)`);
            $('.outer-circle p').css('transform', `rotate(-${degree}deg)`); 
            $('.inner-circle img').attr('src', `../img/tele2.png`);
            $('.inner-circle img').css('transform', `rotate(-${degree}deg)`);    
            degree = 90;
        }
        
    })




})