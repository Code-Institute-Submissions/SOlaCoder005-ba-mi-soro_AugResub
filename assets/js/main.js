/*jshint esversion: 6 */

const ham = document.querySelector('.ham');
const navMU = document.querySelector('#nav-MU');
let hamExpand = false;

//Nav exapnd and collapse feature
ham.addEventListener('click', () => {
    if(!hamExpand) {
        ham.classList.add('open');
        navMU.classList.toggle('show');
        hamExpand = true;
    } else {
        ham.classList.remove('open');
        navMU.classList.remove('show');
        hamExpand = false;
    }
});

/** DEVELOPER NOTES
 * 'jshint eversion...' tells JavaScript checkers like JShint that source code uses 'ECMAScript 6' specific syntax (Hibbard, 2014)
 * Reference material: 
        * Florin Pop, 2020  [https://www.youtube.com/watch?v=ydZc17rlR5E] 
        * codeSTACKr, 2019 [https://youtu.be/dIyVTjJAkLw]
*/ 
