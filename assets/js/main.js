//Nav bar collapse and expand feature. Reference material: Florin Pop - Youtuber[https://www.youtube.com/watch?v=ydZc17rlR5E] 
const ham = document.getElementById('ham');
const navMU = document.getElementById('nav-MU');

ham.addEventListener('click', () => {
    navMU.classList.toggle('show');
});

//Quiz-end fade out feature. Reference material: Traversy Media - Youtuber[https://www.youtube.com/watch?v=kVc_XfZY0vI&t=69s]
$(document).ready(function(){
    $('#btnSeePoints').click(function(){
        $('#gamefin').fadeOut(500);
    });
});


   




