// // This code assumes that the file name of each page matches the id of its link in the navbar
// var currentPage = window.location.pathname.split("#").pop().split(".")[0];
// document.getElementById(currentPage + "-link").classList.add("active");

document.getElementById('explore-button').addEventListener('click', function() {
    document.getElementById('profile').scrollIntoView();
});

document.getElementById('contact-button').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView();
});
