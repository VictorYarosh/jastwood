// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {
  // Custom JS
  const toTopButton = document.getElementById('toTop');
  const toStopButton = document.getElementById('toFooter');

  // const toGetDown = document.getElementById('getDown');
  // const toScrollReq = document.getElementById('request');

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      toTopButton.style.display = 'flex';
    } else {
      toTopButton.style.display = 'none';
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  // window.onscroll = function () {
  //   scrollGetDown();
  // };
  // function scrollGetDown() {

  // }

  toTopButton.addEventListener('click', topFunction);
  // toGetDown.addEventListener('click', scrollGetDown);
});
