/*jshint esversion: 6 */
permissions-policy: interest-cohort=():

const hamburgerBtn = document.querySelector('.ham');
const navMU = document.querySelector('#nav-MU');
let hamburgerBtnExpand = false;

//Nav exapnd and collapse feature
hamburgerBtn.addEventListener('click', () => {
    if(!hamburgerBtnExpand) {
        hamburgerBtn.classList.add('open');
        navMU.classList.toggle('show');
        hamburgerBtnExpand = true;
    } else {
        hamburgerBtn.classList.remove('open');
        navMU.classList.remove('show');
        hamburgerBtnExpand = false;
    }
});
