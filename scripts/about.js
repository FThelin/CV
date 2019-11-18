$(document).ready(() => {      
 

    /**
     * Change text depending on year selected
     */
    const changeAboutText = () => {
        switch (position){
            case 0:
                writeAboutText('Born and raised in Vadstena, Sweden! I developed my interest in music very early and a desire to create stuff has followed me my whole life. I loved to write songs on my Amiga 500 computer using a program called "FastTracker".');
                writeAboutHeading('Early years');
                changeVideo('video/19822.mp4');
                break;
            case -500:
                writeAboutText('In high school my parents persuaded me to study the Economy program. I regret that descision as economy does not really intrest me, and I actually wanted to take a more creative direction, like the Music program.');
                writeAboutHeading('High School');
                changeVideo('video/2001.mp4');
                break;
            case -1000:
                writeAboutText('Because I did not study music in high school I went to a Swedish "folkhögskola" to become a music educator. For 1 year I studied piano and various music subjects. I also played in a hard rock band called "Minora". I discovered that i did not want to work with music, but instead have it as a hobby. I found my new call in life, IT.');
                writeAboutHeading('Music School');
                changeVideo('video/2007.mp4');
                break;
            case -1500:
                writeAboutText('Major part of my adult life I worked for APM Terminals, the container handling of "Port of Gothenburg. There I was involved in several IT projects as a process-expert. I configured and told developers how the systems should work. I was part of a team that implemented two major "Terminal Operating Systems" and also a "Automated Gate" system that allowed truck drivers to enter the terminal through an automated system.');
                writeAboutHeading('Port of Gothenburg');
                changeVideo('video/2008.mp4');
                break;
            case -2000:
                writeAboutText('Currently I am studying at "Medieinstitutet" to become a Front-End developer. I feel that I have found my call in life. I love problem solving, deep-diving into code, the creative side of if in making websites and applications. Also I like working with customers and creating things that other people can use. Making it pretty and user-friendly.');
                writeAboutHeading('Front-End Developer');
                changeVideo('video/2019.mp4');
                break;
            default:
                writeAboutText('Something went wrong!');
                writeAboutHeading('Error');
                break;
        }
    }

    /**
     * Change text and animate it
     * @param {String} text The text written when clicking on each year
     */
    const writeAboutText = text => {
        $('.about-text p').animate({'opacity': 0}, 400, () => {
            $('.about-text p').text(text).animate({'opacity': 1}, 400);    
        });
    }

    /**
     * Change heading and animate it
     * @param {String} heading The heading text written when clicking on each year
     */
    const writeAboutHeading = heading => {
        $('.about-text h2').animate({'opacity': 0}, 400, () => {
            $('.about-text h2').text(heading).animate({'opacity': 1}, 400);
        });
    }

    /**
     * Change Video in the about section
     * @param {String} url Url to image
     */
    const changeVideo = url => {
        $('video source').attr('src', `${url}`);
        $(".video video")[0].load();
    }

    let position = 0;

    /**
     * Change year using the slider.
     */
    $('.slide-left').click(() => {        
        if (position <= -500) {            
            position += 500;                  
            $('.running-man img').animate({
                left: position
            },1000);
            changeAboutText();
        }
    })

    $('.slide-right').click(() => {        
        if (position > -2000) {            
            position -= 500;                  
            $('.running-man img').animate({
                left: position
            },1000);
            changeAboutText();
        }    
    })







})