$(document).ready(() => {  

    

    const writeAboutText = text => {
        $('.about-text p').animate({'opacity': 0}, 400, () => {
            $('.about-text p').text(text).animate({'opacity': 1}, 400);    
        });
    }

    const changeAboutText = () => {
        switch (position){
            case 0:
                writeAboutText('Born and raised in Vadstena, Sweden!Born and raised in Vadstena, Sweden!');
                $('video source').attr('src', 'video/19822.mp4');
                $(".video video")[0].load();
                break;
            case -500:
                writeAboutText('Ekonomisk linje');
                break;
            case -1000:
                writeAboutText('Musikpedagog');
                $('video source').attr('src', 'video/2007.mp4');
                $(".video video")[0].load();
                break;
            case -1500:
                writeAboutText('Hamnen');
                break;
            case -2000:
                writeAboutText('Medieinstitutet');
                break;
            default:
                writeAboutText('def');
                break;
        }
    }

    let position = 0;

    $('.slide-up').click(() => {        
        if (position <= -500) {            
            position += 500;  
            console.log(position)                  
            $('.running-man img').animate({
                left: position
            },1000);
            changeAboutText();
        }
    })

    $('.slide-down').click(() => {        
        if (position > -2000) {            
            position -= 500;  
            console.log(position)                  
            $('.running-man img').animate({
                left: position
            },1000);
            changeAboutText();
        }    
    })







})