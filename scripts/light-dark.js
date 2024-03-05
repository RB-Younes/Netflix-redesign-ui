let Light = 0;

document.getElementById('Light').addEventListener('click', function() {

  var scrollPosition = window.scrollY;

  var Body = document.getElementsByTagName('body')[0];
  var nd2 = document.getElementById('nd2page');
  var rd3 = document.getElementById('rd3page');
  var rd4 = document.getElementById('rd4page');

  var elements = document.getElementsByClassName('name');

        // Loop through the elements and toggle background color
        for (var i = 0; i < elements.length; i++) {
            if (Light === 0) {
                elements[i].style.color = 'Black'
            } else {
                elements[i].style.color = 'White'
            }
        }

  // Get the target element
  if (Light == 0) {
    Body.style.backgroundColor  = 'rgb(230, 230, 230)';
    nd2.style.color = 'Black';
    rd3.style.color = 'Black';
    rd4.style.color = 'Black';
    if (980 < scrollPosition) {
      head.style.backgroundColor  = 'rgba(0, 0, 0, 10)';
    }
    Light = 1
  } else {
    nd2.style.color = 'White';
    rd3.style.color = 'White';
    rd4.style.color = 'White';
    Body.style.backgroundColor  = 'Black';
    head.style.backgroundColor = 'rgba(0,0,0,0)';
    Light = 0
  }

});


window.addEventListener('scroll', function() {
  var head = document.getElementById('head');



  var contentElement = document.getElementById('content');
  var scrollPosition = window.scrollY;


  if (Light == 1 && 980 < scrollPosition) {
    head.style.backgroundColor  = 'rgba(0, 0, 0, 10)';
  } else {
    if (scrollPosition < 980) {
      head.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  }

  if (scrollPosition < 980) {
    document.getElementById('Home').className = "btns-h-hovered"
  document.getElementById('TV-Shows').className = "btns-h-long"
  document.getElementById('Movies').className = "btns-h"
  document.getElementById('Latest').className = "btns-h"
  document.getElementById('My-List').className = "btns-h-long"
  document.getElementById('News').className = "btns-h"
  } 
  if (980 < scrollPosition  && scrollPosition < 1410 ) { 
    document.getElementById('Home').className = "btns-h"
    document.getElementById('TV-Shows').className = "btns-h-long-hovered"
    document.getElementById('Movies').className = "btns-h"
    document.getElementById('Latest').className = "btns-h"
    document.getElementById('My-List').className = "btns-h-long"
    document.getElementById('News').className = "btns-h"
  }

  if (1410 < scrollPosition  && scrollPosition < 1940 ) { 
    document.getElementById('Home').className = "btns-h"
    document.getElementById('TV-Shows').className = "btns-h-long"
    document.getElementById('Movies').className = "btns-h-hovered"
    document.getElementById('Latest').className = "btns-h"
    document.getElementById('My-List').className = "btns-h-long"
    document.getElementById('News').className = "btns-h"
  }

  if (1920 < scrollPosition  && scrollPosition < 2430 ) { 
    document.getElementById('Home').className = "btns-h"
    document.getElementById('TV-Shows').className = "btns-h-long"
    document.getElementById('Movies').className = "btns-h"
    document.getElementById('Latest').className = "btns-h-hovered"
    document.getElementById('My-List').className = "btns-h-long"
    document.getElementById('News').className = "btns-h"
  }

  if (2430 < scrollPosition  && scrollPosition < 2800 ) { 
    document.getElementById('Home').className = "btns-h"
    document.getElementById('TV-Shows').className = "btns-h-long"
    document.getElementById('Movies').className = "btns-h"
    document.getElementById('Latest').className = "btns-h"
    document.getElementById('My-List').className = "btns-h-long-hovered"
    document.getElementById('News').className = "btns-h"
  }

  if (2800 < scrollPosition  && scrollPosition < 3710 ) { 
    document.getElementById('Home').className = "btns-h"
    document.getElementById('TV-Shows').className = "btns-h-long"
    document.getElementById('Movies').className = "btns-h"
    document.getElementById('Latest').className = "btns-h"
    document.getElementById('My-List').className = "btns-h-long"
    document.getElementById('News').className = "btns-h-hovered"
  }

});
