const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("navList");
const link1 = document.getElementById("lis1");
const link2 = document.getElementById("lis2");
const link3 = document.getElementById("lis3");
const link4 = document.getElementById("lis4");

function toggleButton(){
    navList.classList.toggle('show');
    link1.classList.toggle('show');
    link2.classList.toggle('show');
    link3.classList.toggle('show');
    link4.classList.toggle('show');

}

hamburgerButton.addEventListener('click', toggleButton);