/*jshint esversion: 6 */

const tallyTotalRef = document.querySelector('#tallyTotal');
const totalPointsRef = localStorage.getItem('totalPoints');
const play = document.querySelector('#btnSeePoints');
const confettiAnimationRef = document.querySelector('#svg');
var bodymovin;
var $;

//Animation Feature
let animate = bodymovin.loadAnimation ({
    wrapper: confettiAnimationRef, 
    animType: 'svg',
    loop: false, 
    autoplay: true,
    path: 'https://assets2.lottiefiles.com/packages/lf20_awltzwnj.json', 
});

play.addEventListener('click', () =>{
    confettiAnimationRef.classList.remove('hide');
    animate.goToAndPlay(0, true);
});

animate.addEventListener('complete', () => {
    confettiAnimationRef.classList.add('hide');
});

//Quiz-end points fade-in feature
$(document).ready(function (){
    $('#btnSeePoints').click(function (){
        $('#pointsDisplay').fadeIn(1000);
    });
});

//Fetches score results from the respective quiz user has played
tallyTotalRef.innerHTML = totalPointsRef; 

 


