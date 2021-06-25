/*jshint esversion: 6 */

//Nav bar collapse and expand feature 
const ham = document.getElementById('ham');
const navMU = document.getElementById('nav-MU');

ham.addEventListener('click', () => {
    navMU.classList.toggle('show');
});

/** DEVELOPER NOTES
 * 'jshint eversion...' tells JavaScript checkers like JShint that source code uses 'ECMAScript 6' specific syntax (Hibbard, 2014)
 * Reference material: 
        * J. Q. Quick, 2019 [https://youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx]
        * Florin Pop [https://www.youtube.com/watch?v=ydZc17rlR5E] 
*/ 
