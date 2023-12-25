var txt = 'Revy Adelinda Vierra';
var speed = 80;
var delayBetweenRepeats = 900; 
startTyping();

function startTyping() {
  typeWriter(txt, function() {
    eraseText(startTyping); 
  });
} 

function typeWriter(text, onComplete) {
  var i = 0;
  var demoElement = document.getElementById("demo");

  function type() {
    if (i < text.length) {
      demoElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      onComplete();
    }
  }

  type();
}

function eraseText(onComplete) {
  var demoElement = document.getElementById("demo");
  var text = demoElement.innerHTML;
  var i = text.length;

  function erase() {
    if (i >= 0) {
      demoElement.innerHTML = text.substring(0, i);
      i--;
      setTimeout(erase, speed);
    } else {
      onComplete();
    }
  }

  erase();
}
