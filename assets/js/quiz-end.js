//Quiz-end fade out feature. Reference material: Traversy Media - Youtuber[https://www.youtube.com/watch?v=kVc_XfZY0vI&t=69s]
$(document).ready(function(){
    $('#btnSeePoints').click(function(){
        $('#gamefin').fadeOut(500);
    });
});

const tallyTotal = document.getElementById('tallyTotal');
const totalPoints = localStorage.getItem('totalPoints');
tallyTotal.innerText = totalPoints;