/*let lastScrollTop = 0;
window.addEventListener('scroll', function() {
  const targetSection_down = document.getElementById('nd2page');
  const targetSection_up = document.getElementById('cont-home');
  const targetOffset_down = targetSection_down.offsetTop;
  const targetOffset_up = targetSection_up.offsetTop;
  const currentScroll = window.pageYOffset;

  // You can adjust the offset as needed
  const triggerPoint_down = targetOffset_down - 1080;
  const triggerPoint_up = targetOffset_up + 1080;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    if (currentScroll >= triggerPoint_down) {
      targetSection_down.scrollIntoView({ behavior: 'smooth' });
    }
} else {
    // Scrolling up
    if (currentScroll < triggerPoint_up) {
      targetSection_up.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
}

lastScrollTop = currentScroll;
})*/


document.getElementById('Home').addEventListener('click', function() {
  // Get the target element
  var targetElement = document.getElementById('BG');
  
  // Scroll to the target element
  targetElement.scrollIntoView({ behavior: 'smooth' });

  document.getElementById('Home').className = "btns-h-hovered"
  document.getElementById('TV-Shows').className = "btns-h-long"
  document.getElementById('Movies').className = "btns-h"
  document.getElementById('Latest').className = "btns-h"
  document.getElementById('My-List').className = "btns-h-long"
  document.getElementById('News').className = "btns-h"

});


document.getElementById('TV-Shows').addEventListener('click', function() {
  // Get the target element
  var targetElement = document.getElementById('nd2page');
  
  // Scroll to the target element
  targetElement.scrollIntoView({ behavior: 'smooth' });

  document.getElementById('Home').className = "btns-h"
  document.getElementById('TV-Shows').className = "btns-h-long-hovered"
  document.getElementById('Movies').className = "btns-h"
  document.getElementById('Latest').className = "btns-h"
  document.getElementById('My-List').className = "btns-h-long"
  document.getElementById('News').className = "btns-h"

});


document.getElementById('Movies').addEventListener('click', function() {
  // Get the target element
  var targetElement = document.getElementById('nd2page');
  
  // Scroll to the target element
  targetElement.scrollIntoView({ behavior: 'smooth' });

  document.getElementById('Home').className = "btns-h"
  document.getElementById('TV-Shows').className = "btns-h-long"
  document.getElementById('Movies').className = "btns-h-hovered"
  document.getElementById('Latest').className = "btns-h"
  document.getElementById('My-List').className = "btns-h-long"
  document.getElementById('News').className = "btns-h"

});


document.getElementById('Latest').addEventListener('click', function() {
  // Get the target element
  var targetElement = document.getElementById('rd3page');
  
  // Scroll to the target element
  targetElement.scrollIntoView({ behavior: 'smooth' });

  document.getElementById('Home').className = "btns-h"
  document.getElementById('TV-Shows').className = "btns-h-long"
  document.getElementById('Movies').className = "btns-h"
  document.getElementById('Latest').className = "btns-h-hovered"
  document.getElementById('My-List').className = "btns-h-long"
  document.getElementById('News').className = "btns-h"

});

document.getElementById('My-List').addEventListener('click', function() {
  // Get the target element
  var targetElement = document.getElementById('rd3page');
  
  // Scroll to the target element
  targetElement.scrollIntoView({ behavior: 'smooth' });

  document.getElementById('Home').className = "btns-h"
  document.getElementById('TV-Shows').className = "btns-h-long"
  document.getElementById('Movies').className = "btns-h"
  document.getElementById('Latest').className = "btns-h"
  document.getElementById('My-List').className = "btns-h-long-hovered"
  document.getElementById('News').className = "btns-h"

});


document.getElementById('News').addEventListener('click', function() {
  // Get the target element
  var targetElement = document.getElementById('rd4page');
  
  // Scroll to the target element
  targetElement.scrollIntoView({ behavior: 'smooth' });

  document.getElementById('Home').className = "btns-h"
  document.getElementById('TV-Shows').className = "btns-h-long"
  document.getElementById('Movies').className = "btns-h"
  document.getElementById('Latest').className = "btns-h"
  document.getElementById('My-List').className = "btns-h-long"
  document.getElementById('News').className = "btns-h-hovered"

});


