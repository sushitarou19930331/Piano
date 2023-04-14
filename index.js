var numberOfDrumButtons = document.querySelectorAll(".piano").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".piano")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "Do":
      var tom1 = new Audio("Piano/Do.mp3");
      tom1.play();
      break;

    case "Re":
      var tom2 = new Audio("Piano/Re.mp3");
      tom2.play();
      break;

    case "Mi":
      var tom3 = new Audio("Piano/Mi.mp3");
      tom3.play();
      break;

    case "Fa":
      var tom4 = new Audio("Piano/Fa.mp3");
      tom4.play();
      break;

    case "So":
      var snare = new Audio("Piano/So.mp3");
      snare.play();
      break;

    case "La":
      var crash = new Audio("Piano/La.mp3");
      crash.play();
      break;

    case "Ti":
      var kick = new Audio("Piano/Ti.mp3");
      kick.play();
      break;
    
      case "do":
      var kick = new Audio("Piano/do2.mp3");
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
