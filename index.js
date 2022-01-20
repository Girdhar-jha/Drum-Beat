for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInner = this.innerHTML;
    zampa(buttonInner);
    animation(buttonInner);
  });
}

  // var audio = new Audio('sounds/tom-1.mp3');
  // audio.play();
  document.addEventListener("keydown", function(e) {
    zampa(e.key);
    animation(e.key);
  });

  function zampa(key) {
    switch (key) {
      case "w":
        var audio = new Audio('tom-1.mp3');
        audio.play();
        break;
      case "a":
        var audio = new Audio('tom-2.mp3');
        audio.play();
        break;
      case "s":
        var audio = new Audio('tom-3.mp3');
        audio.play();
        break;
      case "d":
        var audio = new Audio('tom-4.mp3');
        audio.play();
        break;
      case "j":
        var audio = new Audio('snare.mp3');
        audio.play();
        break;
      case "k":
        var audio = new Audio('crash.mp3');
        audio.play();
        break;
      default:
        var audio = new Audio('kick-bass.mp3');
        audio.play();
        break;
    }
  }
function animation(key)
{
  var temo = document.querySelector("."+key);
  temo.classList.add("pressed");
  setTimeout(function(){
    temo.classList.remove("pressed");
  },100);
}
