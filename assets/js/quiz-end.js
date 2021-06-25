/*jshint esversion: 6 */

//Quiz-end fade out feature
$(document).ready(function(){
    $('#btnSeePoints').click(function(){
        $('#pointsDisplay').fadeIn(1000);
    });
});

//Fetches score results from the respective quiz user has played
const tallyTotal = document.getElementById('tallyTotal');
const totalPoints = localStorage.getItem('totalPoints');
tallyTotal.innerText = totalPoints;


/** DEVELOPER NOTES
 * 'jshint eversion...' tells JavaScript checkers like JShint that source code uses 'ECMAScript 6' specific syntax (Hibbard, 2014)
 * Reference material: 
        * J. Q. Quick, 2019 [https://youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx]
        * Traversy Media - Youtuber[https://www.youtube.com/watch?v=kVc_XfZY0vI&t=69s]
*/ 


