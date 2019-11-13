$(document).ready(() => {

    /**
     * Animate the skill pillars
     */
    const fillSkillLevels = () => { 

    $('.html').css('background', 'linear-gradient(to right,  rgb(0,91,133) 80%,rgb(226,226,226) 80%,rgb(189,0,132) 80%,rgb(189,0,132) 100%,rgb(244,244,244) 100%)').animate({'width': '88%'}, 800);    
    $('.css').css('background', 'linear-gradient(to right,  rgb(0,91,133) 70%,rgb(226,226,226) 70%,rgb(189,0,132) 70%,rgb(189,0,132) 100%,rgb(244,244,244) 100%)').animate({'width': '88%'}, 900);   
    $('.js').css('background', 'linear-gradient(to right,  rgb(0,91,133) 60%,rgb(226,226,226) 60%,rgb(189,0,132) 60%,rgb(189,0,132) 100%,rgb(244,244,244) 100%)').animate({'width': '88%'}, 1000);      
    $('.jq').css('background', 'linear-gradient(to right,  rgb(0,91,133) 40%,rgb(226,226,226) 40%,rgb(189,0,132) 40%,rgb(189,0,132) 100%,rgb(244,244,244) 100%)').animate({'width': '88%'}, 1100);
    $('.react').css('background', 'linear-gradient(to right,  rgb(0,91,133) 10%,rgb(226,226,226) 10%,rgb(189,0,132) 10%,rgb(189,0,132) 100%,rgb(244,244,244) 100%)').animate({'width': '88%'}, 1200);
    $('.be').css('background', 'linear-gradient(to right,  rgb(0,91,133) 10%,rgb(226,226,226) 10%,rgb(189,0,132) 10%,rgb(189,0,132) 80%,rgb(244,244,244) 80%)').animate({'width': '88%'}, 1300);
    $('.ts').css('background', 'linear-gradient(to right,  rgb(0,91,133) 0%,rgb(226,226,226) 0%,rgb(189,0,132) 0%,rgb(189,0,132) 100%,rgb(244,244,244) 100%)').animate({'width': '88%'}, 1400); 
    $('.p5').css('background', 'linear-gradient(to right,  rgb(0,91,133) 10%,rgb(226,226,226) 10%,rgb(189,0,132) 10%,rgb(189,0,132) 80%,rgb(244,244,244) 80%)').animate({'width': '88%'}, 1500);
    $('.fb').css('background', 'linear-gradient(to right,  rgb(0,91,133) 60%,rgb(226,226,226) 60%,rgb(189,0,132) 60%,rgb(189,0,132) 70%,rgb(244,244,244) 70%)').animate({'width': '88%'}, 1600);
    $('.gu').css('background', 'linear-gradient(to right,  rgb(0,91,133) 50%,rgb(226,226,226) 50%,rgb(189,0,132) 50%,rgb(189,0,132) 60%,rgb(244,244,244) 60%)').animate({'width': '88%'}, 1700);
    $('.pi').css('background', 'linear-gradient(to right,  rgb(0,91,133) 70%,rgb(226,226,226) 70%,rgb(189,0,132) 70%,rgb(189,0,132) 90%,rgb(244,244,244) 90%)').animate({'width': '88%'}, 1700);
    $('.rc').css('background', 'linear-gradient(to right,  rgb(0,91,133) 80%,rgb(226,226,226) 80%,rgb(189,0,132) 80%,rgb(189,0,132) 90%,rgb(244,244,244) 90%)').animate({'width': '88%'}, 1800);               
    }
  

    $(window).scroll(() => {
      if ($(window).scrollTop() >= $('.skills').offset().top) {
        fillSkillLevels()
      }
  
  })
});




  