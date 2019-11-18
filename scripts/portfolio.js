$(document).ready(() => {  

    let degree = 90;

    /**
     * Click the turning knob to display the different projects. Text, image and links all change when turning.
     */
    $('.turning-knob').click(() => {

        $('.project-links a:nth-child(1)').show();
        $('.project-links a:nth-child(2)').show();
        
        if (degree === 90){
            turnKnob(degree);
            changeClassOnTabs('2', '1');
            showStaticGif();
            waitForNewProjectImage('../img/mwct.jpg');
            displayProjectText('Another school project where we had to found an old ugly website and modernize it. Me and my partner found a company that worked with web design. <br><br> Their site was from 1995 and link to the old website is found inside the modern site.');                                                        
            changeLinkDestination('https://fthelin.github.io/MidwestCompTech/', 'https://github.com/FThelin/MidwestCompTech');
            degree = 180;
        } else if (degree === 180){
            turnKnob(degree);
            changeClassOnTabs('3', '2');
            showStaticGif();
            waitForNewProjectImage('../img/tele2.jpg');
            displayProjectText('Yet another school project where we had to create a replica of an existing website. <br><br> We choose the swedish phone operator "Tele2" website.');
            changeLinkDestination('https://fthelin.github.io/Tele2Replica/', 'https://github.com/FThelin/Tele2Replica');                                                      
            degree = 270;
        } else if (degree === 270){
            turnKnob(degree);
            changeClassOnTabs('4', '3');
            showStaticGif();
            waitForNewProjectImage('../img/guesswho.jpg');
            displayProjectText('Work in progress. My son is really in to superheroes. One of my favourite games as a child was "Guess who?" So why not build a superhero version of it. <br><br> Check in at another time to view the finished project.');                                                        
            $('.project-links a:nth-child(1)').hide();
            $('.project-links a:nth-child(2)').hide();
            degree = 0;
        } else if (degree === 0){
            turnKnob(degree);
            changeClassOnTabs('1', '4');
            showStaticGif();
            waitForNewProjectImage('../img/mansionmurder.jpg');
            displayProjectText('This is a school project I did when studying Javascript. Mansion Murder is a text-based game using commands in order to progress. <br><br> Can you figure out the puzzles and mini-games in order to find the murderer?');                                                        
            changeLinkDestination('https://fthelin.github.io/', 'https://github.com/FThelin/FThelin.github.io'); 
            degree = 90;
        }        
    })

    /**
     * Turn the knob around
     * @param {Number} degree Number of degrees to turn the knob
     */
    const turnKnob = degree => {
        $('.turning-knob').css('transform', `rotate(${degree}deg)`);
    }

    /**
     * Show the gif of an static TV screen
     */
    const showStaticGif = () => {
        $('.project-image img').attr('src', '../img/static.gif');
    }

    /**
     * Add and remove the .selected class from the project tabs to highlight the selected one.
     * @param {String} child1 Child to add the selected class to
     * @param {String} child2 Child to remove the selected class from
     */
    const changeClassOnTabs = (child1, child2) => {
        $(`.project-tabs ul li:nth-child(${child1})`).addClass('selected');
        $(`.project-tabs ul li:nth-child(${child2})`).removeClass('selected');
    }

    /**
     * Change image depending on project selected
     * @param {String} imagePath Url to the image
     */
    const waitForNewProjectImage = imagePath => {
        setTimeout(() => {
            $('.project-image img').attr('src', `${imagePath}`);  
        },1500);
    }

    /**
     * Display information text for the project
     * @param {String} text Information about the project
     */
    const displayProjectText = text => {
        $('.project-text p').animate({'opacity': 0}, 400, () => {
            $('.project-text p').html(text).animate({'opacity': 1}, 400);    
        });
    }

    /**
     * 
     * @param {String} website Url to the Github pages website
     * @param {String} github Url to the Github repo
     */
    const changeLinkDestination = (website, github) => {
        $(`.project-links a:nth-child(1)`).attr('href', `${website}`);
        $(`.project-links a:nth-child(2)`).attr('href', `${github}`);
    }
})