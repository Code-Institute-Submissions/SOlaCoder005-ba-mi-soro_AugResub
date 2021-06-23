const questionbl = document.getElementById("beginnerquest");
const choicesbl = Array.from (document.getElementsByClassName("option-btn")); 
// console.log(choicesbl);

//Reference material: Florin Pop - Youtuber[https://www.youtube.com/watch?v=ydZc17rlR5E]
const ham = document.getElementById('ham');
const navMU = document.getElementById('nav-MU');

ham.addEventListener('click', () => {
    navMU.classList.toggle('show');
});

const question = document.getElementById("beginnerquest");

