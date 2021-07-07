/*jshint esversion: 6 */

const tallyTotal = document.querySelector('#tallyTotal');
const totalPoints = localStorage.getItem('totalPoints');
const play = document.querySelector('#btnSeePoints');
const svgTag = document.querySelector('#svg');
const $ = document.querySelector; //see developer notes for reason of decalation
const bodymovin = document.querySelector; //see developer notes for reason of decalation

//Animation Feature
let animate = bodymovin.loadAnimation ({
    wrapper: svgTag, 
    animType: 'svg',
    loop: false, 
    autoplay: true,
    path: 'https://assets2.lottiefiles.com/packages/lf20_awltzwnj.json', 
});

play.addEventListener('click', () =>{
    svgTag.classList.remove('hide');
    animate.goToAndPlay(0, true);
});

animate.addEventListener('complete', () => {
    svgTag.classList.add('hide');
});

//Quiz-end points fade-in feature
$(document).ready(function (){
    $('#btnSeePoints').click(function (){
        $('#pointsDisplay').fadeIn(1000);
    });
});

//Fetches score results from the respective quiz user has played
tallyTotal.innerHTML = totalPoints; 

/** DEVELOPER NOTES
 * 'jshint eversion...' tells JavaScript checkers like JShint that source code uses 'ECMAScript 6' specific syntax (Hibbard, 2014)
 * Reference material: 
        * J. Q. Quick, 2019 [https://youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx]
        * View Score TallyTotal Feature - Traversy Media, 2016 [https://www.youtube.com/watch?v=kVc_XfZY0vI&t=69s]
        * Animation Feature - DesignCourse, 2021 [https://www.youtube.com/watch?v=kVc_XfZY0vI&t=69s]
        * The '$' operator and 'bodymovin' variable has been declared to adhere to JShint requirements. The feature executes without defining the variables mentioned. Source: [https://stackoverflow.com/questions/1150381/what-is-the-meaning-of-sign-in-javascript];
*/ 


